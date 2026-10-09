'use client';

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface ChartProps {
  data: Array<{ name: string; [key: string]: string | number }>;
  dataKeys: Array<{ key: string; name: string; color: string }>;
  chartType: 'bar' | 'line' | 'area';
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

const CustomTooltip = ({ active, payload, label, theme }: any) => {
  if (active && payload && payload.length) {
    const isLight = theme === 'light';
    return (
      <div className={`p-3 rounded-xl border shadow-xl backdrop-blur-md ${
        isLight ? 'bg-white/95 border-slate-200 text-slate-900' : 'bg-[#121722]/95 border-slate-700 text-white'
      }`}>
        <p className={`text-xs font-semibold mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`tooltip-${index}`} className="flex items-center gap-2 text-xs">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className={`font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{entry.name}:</span>
            <span className={`font-bold font-mono ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const InteractiveChart: React.FC<ChartProps> = ({
  data,
  dataKeys,
  chartType,
  title,
  subtitle,
  theme = 'dark'
}) => {
  const isLight = theme === 'light';
  const gridStroke = isLight ? '#e2e8f0' : '#334155';
  const axisStroke = isLight ? '#64748b' : '#94a3b8';

  return (
    <div className={`w-full min-w-0 rounded-2xl p-4 md:p-5 border transition-all ${
      isLight 
        ? 'bg-slate-50/90 border-slate-200 shadow-sm' 
        : 'bg-[#101520]/80 border-slate-800/80 shadow-md'
    }`}>
      {title && (
        <div className="mb-4">
          <h4 className={`text-sm font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>{title}</h4>
          {subtitle && <p className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{subtitle}</p>}
        </div>
      )}

      <div className="h-60 sm:h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'area' ? (
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                {dataKeys.map((k) => (
                  <linearGradient key={k.key} id={`gradient-pd-${k.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={k.color} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={k.color} stopOpacity={0.0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
              <XAxis
                dataKey="name"
                stroke={axisStroke}
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: gridStroke }}
              />
              <YAxis
                stroke={axisStroke}
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip theme={theme} />} />
              {dataKeys.map((k) => (
                <Area
                  key={k.key}
                  type="monotone"
                  dataKey={k.key}
                  name={k.name}
                  stroke={k.color}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill={`url(#gradient-pd-${k.key})`}
                />
              ))}
            </AreaChart>
          ) : chartType === 'line' ? (
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
              <XAxis
                dataKey="name"
                stroke={axisStroke}
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: gridStroke }}
              />
              <YAxis
                stroke={axisStroke}
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip theme={theme} />} />
              {dataKeys.map((k) => (
                <Line
                  key={k.key}
                  type="monotone"
                  dataKey={k.key}
                  name={k.name}
                  stroke={k.color}
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: k.color }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
              <XAxis
                dataKey="name"
                stroke={axisStroke}
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: gridStroke }}
              />
              <YAxis
                stroke={axisStroke}
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip theme={theme} />} />
              {dataKeys.map((k) => (
                <Bar
                  key={k.key}
                  dataKey={k.key}
                  name={k.name}
                  fill={k.color}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className={`flex flex-wrap items-center justify-center gap-4 mt-3 pt-2 border-t ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        {dataKeys.map((k) => (
          <div key={k.key} className="flex items-center gap-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: k.color }} />
            <span className={isLight ? 'text-slate-600 font-medium' : 'text-slate-400 font-medium'}>{k.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
