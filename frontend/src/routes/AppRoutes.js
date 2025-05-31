import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../pages/Dashboard';
import ParkingLots from '../pages/ParkingLots';
import Vehicles from '../pages/Vehicles';
import Devices from '../pages/Devices';
import Reports from '../pages/Reports';
import Users from '../pages/Users';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    <Route path="/parking-lots" element={<PrivateRoute><ParkingLots /></PrivateRoute>} />
    <Route path="/vehicles" element={<PrivateRoute><Vehicles /></PrivateRoute>} />
    <Route path="/devices" element={<PrivateRoute><Devices /></PrivateRoute>} />
    <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
    <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
