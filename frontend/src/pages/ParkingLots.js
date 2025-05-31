import React, { useEffect, useState } from 'react';
import api from '../services/api';
import StatusBadge from '../components/StatusBadge';

const ParkingLots = () => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    api.get('/parking-lots').then(res => setLots(res.data));
  }, []);

  return (
    <div>
      <h2>Danh sách bãi đỗ</h2>
      <table>
        <thead>
          <tr>
            <th>Tên bãi</th>
            <th>Vị trí</th>
            <th>Tổng chỗ</th>
            <th>Còn trống</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {lots.map(lot => (
            <tr key={lot._id}>
              <td>{lot.name}</td>
              <td>{lot.location}</td>
              <td>{lot.totalSlots}</td>
              <td>{lot.availableSlots}</td>
              <td><StatusBadge status={lot.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParkingLots;
