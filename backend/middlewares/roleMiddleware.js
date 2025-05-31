const User = require('../models/User');

const roleMiddleware = (roles = []) => {
    if (typeof roles === 'string') roles = [roles];
    return async (req, res, next) => {
        try {
            const user = await User.findOne({ uid: req.user.uid });
            if (!user || !roles.includes(user.role)) {
                return res.status(403).json({ message: 'Forbidden: insufficient role' });
            }
            req.userInfo = user;
            next();
        } catch (err) {
            res.status(403).json({ message: 'Role check failed' });
        }
    };
};

module.exports = roleMiddleware;
