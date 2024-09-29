const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models/User'); // โมเดลผู้ใช้

const router = express.Router();

// Route สำหรับการสมัครสมาชิก
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // เข้ารหัสรหัสผ่าน
        const hashedPassword = await bcrypt.hash(password, 10);

        // สร้างผู้ใช้ใหม่
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

module.exports = router;
