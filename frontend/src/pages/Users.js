import React, { useEffect, useState } from 'react';
import api from '../services/api';
import StatusBadge from '../components/StatusBadge';

const Users = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    api.get('/admins').then(res => setAdmins(res.data));
  }, []);

  return (
    <div>
      <h2>Quản trị viên</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Tên hiển thị</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin._id}>
              <td>{admin.email}</td>
              <td>{admin.full_name || admin.username}</td>
              <td>{admin.role}</td>
              <td>
                <StatusBadge status={'active'} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {admins.length === 0 && <div>Không có quản trị viên nào.</div>}
    </div>
  );
};

export default Users;
