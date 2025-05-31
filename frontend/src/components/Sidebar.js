import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">Smart Parking</div>
    <nav>
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
      <NavLink to="/parking-lots" className={({ isActive }) => isActive ? 'active' : ''}>Bãi đỗ</NavLink>
      <NavLink to="/vehicles" className={({ isActive }) => isActive ? 'active' : ''}>Xe vào/ra</NavLink>
      <NavLink to="/devices" className={({ isActive }) => isActive ? 'active' : ''}>Thiết bị</NavLink>
      <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''}>Báo cáo</NavLink>
      <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>Quản trị viên</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
