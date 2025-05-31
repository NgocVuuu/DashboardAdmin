import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard'); // Chuyển hướng sau khi đăng nhập thành công
    } catch (err) {
      console.error('Firebase login error:', err); // Thêm dòng này để xem mã lỗi thực tế
      let msg = 'Đăng nhập thất bại';
      if (err.code === 'auth/user-not-found') msg = 'Tài khoản không tồn tại';
      else if (err.code === 'auth/wrong-password') msg = 'Sai mật khẩu';
      else if (err.code === 'auth/invalid-email') msg = 'Email không hợp lệ';
      else if (err.code === 'auth/user-disabled') msg = 'Tài khoản đã bị vô hiệu hóa';
      else if (err.code === 'auth/too-many-requests') msg = 'Đăng nhập bị tạm khóa do quá nhiều lần thử sai';
      setError(msg);
    }
  };

  return (
    <div className="login-page">
      <h2>Đăng nhập quản trị</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder="Email quản trị"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          id="login-password"
          name="password"
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button type="submit">Đăng nhập</button>
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
