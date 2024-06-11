import { useEffect, useState } from 'react';
import { connect, StringCodec, nkeyAuthenticator } from 'nats.ws';

const NatsComponent = ({ setMessage, setHeaders, setRawMessages }) => {
  const [natsClient, setNatsClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const flattenObject = (input, keyName) => {
    var result = {};
    for (const key in input) {
      const newKey = keyName ? `${keyName}_${key}` : key;
      if (typeof input[key] === 'object' && !Array.isArray(input[key])) {
        result = { ...result, ...flattenObject(input[key], newKey) };
      } else {
        result[newKey] = input[key];
      }
    }
    return result;
  };

  const filteredData = (data) => {
    Object.keys(data).reduce((acc, key) => {
      const value = data[key];
      if (typeof value !== 'object' || value === null) {
        acc[key] = value;
      }
      return acc;
    }, {});
  };

  function removeObjects(obj) {
    let result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] !== 'object') {
        result[key] = obj[key].toString();
      }
    }
    return result;
  }

  const getLocalEncodedSub = JSON.parse(localStorage.getItem('formResponse'))?.device
    ?.protocol_pipeline_subject;
  const getLocalRawSub = JSON.parse(localStorage.getItem('formResponse'))?.device
    ?.raw_pipeline_subject;

  useEffect(() => {
    async function connectToNATS() {
      try {
        const seed = new TextEncoder().encode(process.env.REACT_APP_NATS_NKEY);
        console.log('Nats connecting!');
        setLoading(true);
        const nc = await connect({
          servers: `${process.env.REACT_APP_NATS_URL}`,
          authenticator: nkeyAuthenticator(seed),
        });
        console.log('Nats connected!');

        setNatsClient(nc);
        setLoading(false);
        const sc = StringCodec();
        // const sub = nc.subscribe(`${getLocalEncodedSub}.>`);
        // const sub2 = nc.subscribe(`${getLocalRawSub}.>`);
        const sub = nc.subscribe('pipelines.gt06.355710090330916.>');
        const sub2 = nc.subscribe(`pipelines.raw.gt06.registered_devices.355710090330916.>`);
        (async () => {
          for await (const msg of sub) {
            try {
              const decodedmessage = JSON.parse(sc.decode(msg.data));

              if (decodedmessage.event?.number === 34) {
                setMessage((prevMessages) => {
                  const updatedMessages = [...prevMessages, removeObjects(decodedmessage)];
                  return updatedMessages.slice(-10);
                });
              }
            } catch (error) {
              console.log('error', error);
            }
          }
        })();
        (async () => {
          for await (const msg of sub2) {
            try {
              const decodedmessage = msg.data;
              setRawMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, decodedmessage];
                return updatedMessages.slice(-10);
              });
            } catch (error) {
              console.log('error', error);
            }
          }
        })();
      } catch (error) {
        setLoading(false);
        console.error('Error connecting to NATS:', error);
      }
    }
    connectToNATS();
    return () => {
      if (natsClient) {
        natsClient.close();
        console.log('Nats connection closed!');
      }
    };
  }, []);

  return <>{loading ? 'Loading...' : null}</>;
};

export default NatsComponent;
