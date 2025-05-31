import React from 'react';
import StatusBadge from './StatusBadge';

const VehicleRow = ({ log }) => (
  <tr>
    <td>{log.licensePlate}</td>
    <td>{log.parkingLot?.name || ''}</td>
    <td>{log.timeIn ? new Date(log.timeIn).toLocaleString() : ''}</td>
    <td>{log.timeOut ? new Date(log.timeOut).toLocaleString() : ''}</td>
    <td><StatusBadge status={log.status} /></td>
    <td>
      {log.imageUrl && <img src={log.imageUrl} alt="Xe" style={{ width: 60 }} />}
    </td>
  </tr>
);

export default VehicleRow;
