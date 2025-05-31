import React from 'react';
import StatusBadge from './StatusBadge';

const DeviceStatusCard = ({ device }) => (
  <div className="device-status-card">
    <div>{device.name} ({device.type})</div>
    <StatusBadge status={device.status} />
    <div style={{ fontSize: 12, color: '#888' }}>
      Cập nhật: {device.lastActive ? new Date(device.lastActive).toLocaleString() : 'N/A'}
    </div>
  </div>
);

export default DeviceStatusCard;
