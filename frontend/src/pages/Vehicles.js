import React, { useEffect, useState } from 'react';
import api from '../services/api';
import VehicleRow from '../components/VehicleRow';

const Vehicles = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/vehicles').then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Xe vào/ra</h2>
      <table>
        <thead>
          <tr>
            <th>Biển số</th>
            <th>Bãi đỗ</th>
            <th>Vào lúc</th>
            <th>Ra lúc</th>
            <th>Trạng thái</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => <VehicleRow key={log._id} log={log} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Vehicles;
