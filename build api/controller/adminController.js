const express = require("express");
const { User } = require("../config/connection");
const adminRouter = express.Router();

// Middleware for admin authentication using a query parameter
const adminAuth = (req, res, next) => {
    const adminKey = req.query.adminKey; // Use query parameter for admin authentication
    const validAdminKey = "your-admin-secret-key"; // Define a secret key for admin

    if (!adminKey || adminKey !== validAdminKey) {
        return res.status(401).json({
            error: true,
            message: "Unauthorized access. Valid admin key is required.",
        });
    }
    next();
};

// Endpoint to get all user data
adminRouter.get("/users", adminAuth, async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["id_user", "name_user", "email_user", "createdAt"],
        });

        res.status(200).json({
            error: false,
            message: "All users retrieved successfully.",
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            error: true,
            message: "Failed to retrieve users.",
        });
    }
});

module.exports = adminRouter;
