import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
  // Nếu deploy backend lên server khác, sửa lại baseURL cho phù hợp
});

export default api;
