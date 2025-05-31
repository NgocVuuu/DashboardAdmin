import React from 'react';

const ChartCard = ({ title, children }) => (
  <div className="chart-card">
    <div className="chart-card-title">{title}</div>
    <div className="chart-card-content">{children}</div>
  </div>
);

export default ChartCard;
