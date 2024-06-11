import React from 'react';
import { Card, CardBody } from '@/shared/components/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const ChartContainer = ({ charttype, messages, chartkeys }) => {

  return (
    <>
      {charttype === 'line_chart' && chartkeys?.length > 0 ? (
        <Card>
          <CardBody>
            <div dir="ltr">
              <ResponsiveContainer height={300}>
                <LineChart data={messages}>
                  <XAxis dataKey={chartkeys[0]} />
                  <YAxis dataKey={chartkeys[1]}/>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  {/* <Line type="monotone" dataKey="i" stroke="#4ce1b6" /> */}
                  {chartkeys.map((key, value) => (
                    <Line key={value} type="monotone" dataKey={key} stroke="#70bbfd" />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      ) : charttype === 'bar_chart' && chartkeys?.length > 0 ? (
        <Card>
          <CardBody>
            <ResponsiveContainer height={300}>
              <BarChart
                width={600}
                height={220}
                data={messages}
                barGap={0}
                barCategoryGap={0}
                stackOffset="expand"
              >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis type="number" hide /> */}
                <YAxis
                  // type="category"
                  dataKey={chartkeys[0]}
                  tickLine={false}
                  verticalAnchor="start"
                  orientation={'left'}
                />
                <Tooltip />
                {chartkeys.map((item) => (
                  <Bar dataKey={item} fill="#48b5ff" barSize={12} />
                ))}
                {/* <Bar dataKey="v" fill="#7edbff" barSize={12} /> */}
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      ) : (
        ''
      )}
    </>
  );
};

export default ChartContainer;
