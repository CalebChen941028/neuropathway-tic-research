import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: 'Non-Comorbid',
    effect: 0.084,
    desc: 'Standard mediation pathway',
  },
  {
    name: 'Comorbid',
    effect: 0.165,
    desc: 'Amplified mediation pathway',
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-100 shadow-xl rounded-lg">
        <p className="font-bold text-slate-800 mb-1">{label}</p>
        <p className="text-teal-600 font-medium">
          Indirect Effect (β): {payload[0].value}
        </p>
        <p className="text-xs text-slate-500 mt-2 max-w-[150px]">
          {payload[0].payload.desc}
        </p>
      </div>
    );
  }
  return null;
};

export const FindingsChart: React.FC = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 14, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            hide 
          />
          <Tooltip cursor={{ fill: '#f1f5f9' }} content={<CustomTooltip />} />
          <Bar dataKey="effect" radius={[8, 8, 0, 0]} animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#94a3b8' : '#0d9488'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-xs text-slate-400 mt-4">
        Beta coefficients representing the strength of the indirect effect of Tic Severity on Metacognition (MI).
      </p>
    </div>
  );
};