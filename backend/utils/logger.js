const logAction = (user, action, detail = '') => {
    // Có thể mở rộng ghi vào DB hoặc file
    console.log(`[${new Date().toISOString()}] User: ${user} - Action: ${action} - Detail: ${detail}`);
};

module.exports = { logAction };
