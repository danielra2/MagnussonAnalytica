// src/AnimatedChart.jsx

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data that trends upwards
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

// Hex colors for customization
const LINE_COLOR = '#ff6b35'; // A nice orange to match your theme
const FILL_COLOR_START = '#ff6b35'; // Start color of the orange gradient
const FILL_COLOR_END = '#f7931e';    // End color of the orange gradient


export default function AnimatedChart() {
  return (
    // ResponsiveContainer makes the chart adapt to its parent's size
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {/* Defines the gradient fill for the area */}
        <defs>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={FILL_COLOR_START} stopOpacity={0.5}/>
            <stop offset="95%" stopColor={FILL_COLOR_END} stopOpacity={0.1}/>
          </linearGradient>
        </defs>

        {/* X-axis and Y-axis are hidden for a clean background look */}
        <XAxis dataKey="year" hide={true} />
        <YAxis hide={true} />

        {/* Tooltip is removed for a cleaner background look */}

        {/* The Area component draws the line and the filled shape below it */}
        <Area
          type="monotoneX"
          dataKey="value"
          stroke={LINE_COLOR}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorFill)" // Applies the gradient we defined
          dot={false} // Hides the dots on the line
          animationDuration={10000} // Speed of animation in milliseconds
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}