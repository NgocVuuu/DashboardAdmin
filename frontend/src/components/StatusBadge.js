import React from 'react';

const StatusBadge = ({ status }) => {
  let color = '#bdbdbd';
  if (status === 'active' || status === 'online' || status === 'in') color = '#43a047';
  if (status === 'inactive' || status === 'offline' || status === 'out') color = '#e53935';
  if (status === 'error') color = '#fbc02d';

  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: 12,
      background: color,
      color: '#fff',
      fontSize: 12
    }}>
      {status}
    </span>
  );
};

export default StatusBadge;
