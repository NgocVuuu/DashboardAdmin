import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ParkingProvider } from './contexts/ParkingContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import './assets/main.scss';

const App = () => (
  <AuthProvider>
    <ParkingProvider>
      <NotificationProvider>
        <BrowserRouter>
          <div className="app-layout" style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header />
              <main style={{ flex: 1, padding: 24 }}>
                <div>
                  <AppRoutes />
                </div>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </NotificationProvider>
    </ParkingProvider>
  </AuthProvider>
);

export default App;
