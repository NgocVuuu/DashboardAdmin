const admin = require('../utils/firebaseAdmin');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        // Log thông tin user từ Firebase để kiểm tra liên kết
        console.log('Firebase decodedToken:', decodedToken);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;
