// src/components/HomePage/AnimatedChart.jsx

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const chartData = [
  { year: '1950', value: 19000 },
  { year: '1960', value: 25000 },
  { year: '1970', value: 31000 },
  { year: '1980', value: 45000 },
  { year: '1990', value: 70000 },
  { year: '2000', value: 90000 },
  { year: '2010', value: 85000 },
  { year: '2020', value: 105000 },
];

const LINE_COLOR = '#ff6b35'; 
const FILL_COLOR_START = '#ff6b35'; 
const FILL_COLOR_END = '#f7931e';    

export default function AnimatedChart() {
  return (
    // Added minWidth={1} and minHeight={1} to suppress the -1 initialization warning
    <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
      <AreaChart
        data={chartData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={FILL_COLOR_START} stopOpacity={0.5}/>
            <stop offset="95%" stopColor={FILL_COLOR_END} stopOpacity={0.1}/>
          </linearGradient>
        </defs>

        <XAxis dataKey="year" hide={true} />
        <YAxis hide={true} />

        <Area
          type="monotoneX"
          dataKey="value"
          stroke={LINE_COLOR}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorFill)" 
          dot={false} 
          animationDuration={10000} 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}