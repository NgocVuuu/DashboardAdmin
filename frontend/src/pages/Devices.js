import React, { useEffect, useState } from 'react';
import api from '../services/api';
import DeviceStatusCard from '../components/DeviceStatusCard';

const Devices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    api.get('/devices').then(res => setDevices(res.data));
  }, []);

  return (
    <div>
      <h2>Thiết bị</h2>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {devices.map(device => (
          <DeviceStatusCard key={device._id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default Devices;
