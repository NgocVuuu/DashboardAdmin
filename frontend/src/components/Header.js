import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-title">Smart Parking Dashboard</div>
      <div className="header-user">
        {user && (
          <>
            <span>{user.displayName || user.email}</span>
            <button onClick={logout}>Đăng xuất</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
