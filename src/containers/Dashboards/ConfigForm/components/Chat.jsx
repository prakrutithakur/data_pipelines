import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import Scrollbar from '@/shared/components/ScrollBar';
import { colorAdditional, colorBackground } from '@/utils/palette';
import { left, right, marginRight } from '@/utils/directions';
import { Button } from '@/shared/components/Button';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
} from '@/shared/components/form/FormElements';
import FormField from '@/shared/components/form/FormField';

const Chat = () => {
const diagramref = useRef(null);

  const messages = [
    { text: 'Hello! How can I help you today?', sender: 'bot' },
    { text: 'I need some information about your services.', sender: 'user' },
    { text: 'Sure! What would you like to know?', sender: 'bot' },
  ];

  const onSubmit = async (values, form) => {
    // const userMessage = { text: values.message, sender: 'user' };
    // setMessages([...messages, userMessage]);
    // form.reset();
    // try {
    //   const response = await sendMessage(values.message);
    //   const botMessage = { text: response.reply, sender: 'bot' };
    //   setMessages((prevMessages) => [...prevMessages, botMessage]);
    // } catch (error) {
    //   console.error('Error getting response:', error);
    // }
  };

  const handleDragStart = (item, index) => {
    console.log('handleDrag', item);
    console.log('handleDrag-index', index);
    // event.preventDefault();
  };


  return (
    <>
      <ChatContainer >
        {/* {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))} */}
        <span draggable onDragStart={(e) => handleDragStart(e.target)} ref={diagramref} style={{border: '1px solid red'}}>
            <p>asdasd{messages[0].sender}</p>
        </span>
      </ChatContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <FormGroupField>
                <Field
                  name="message"
                  type="text"
                  component={FormField}
                  placeholder="Type a message..."
                />
              </FormGroupField>
            </FormGroup>
            <FormButtonToolbar>
              <Button type="submit" disabled={submitting || pristine}>
                Send
              </Button>
            </FormButtonToolbar>
          </FormContainer>
        )}
      />
    </>
  );
};

export default Chat;

// region STYLES

const ChatContainer = styled.div`
  height: calc(100vh - 185px);
  min-height: 300px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  background-color: ${colorBackground};
`;

const ChatMessagesWrap = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
`;

const ChatMessages = styled.div`
  padding: 20px;
  width: 100%;
`;

const ChatScroll = styled(Scrollbar)`
  height: calc(100% - 114px);
  text-align: ${left};

  .scroll-content {
    &,
    & > div {
      height: 100%;
    }
  }

  .scrollbar-track {
    &.scrollbar-track-y {
      width: 2px;
      ${marginRight}: 3px;
    }
  }

  .scrollbar-thumb {
    opacity: 0.3;
    width: 5px;
  }
`;

// endregion
