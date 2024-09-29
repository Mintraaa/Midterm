const User = require('../models/userModel');

exports.checkDuplicateUser = async (req, res, next) => {
    const { email, username } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) return res.status(400).json({ error: 'Email already in use' });
    next();
};

exports.validateRole = (req, res, next) => {
    const { role } = req.body;
    const allowedRoles = ['admin', 'user'];
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({ error: 'Invalid role' });
    }
    next();
};
