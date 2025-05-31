require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const helmet = require('helmet');

// Import routes
const parkingRoutes = require('./routes/parkingRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      styleSrcElem: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      fontSrcElem: ["'self'", 'https://fonts.gstatic.com'],
      // ...bạn có thể thêm các nguồn khác nếu cần...
    }
  }
}));

// API routes
app.use('/api/parking-lots', parkingRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admins', adminRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
