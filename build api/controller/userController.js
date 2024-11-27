const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const { User } = require("../config/db");

userRouter.use(express.json());

userRouter.post("/register", async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password || password.length < 8) {
            return res.status(400).json({
                error: true,
                message: "Invalid input. Password must be at least 8 characters.",
            });
        }



        // Simpan ke database
        await User.create({ name, email, password: password });

        res.status(201).json({
            error: false,
            message: "User Created",
        });
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({
                error: true,
                message: "Email already exists.",
            });
        } else {
            res.status(500).json({
                error: true,
                message: "Failed to create user.",
            });
        }
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cari user berdasarkan email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({
                error: true,
                message: "User not found",
            });
        }

        // Cek password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                error: true,
                message: "Invalid password",
            });
        }

        // Buat token JWT
        const token = jwt.sign(
            { userId: user.id, name: user.name },
            "your-secret-key",
            { expiresIn: "1d" }
        );

        res.status(200).json({
            error: false,
            message: "success",
            loginResult: {
                userId: user.id,
                name: user.name,
                token,
            },
        });
    } catch (err) {
        res.status(500).json({
            error: true,
            message: "Login failed",
        });
    }
});


module.exports = userRouter;