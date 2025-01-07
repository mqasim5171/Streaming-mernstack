const User = require('../Modals/user'); // edit
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const { channelName, userName, about, profilePic, password } = req.body;

        // Validate required fields
        if (!channelName || !userName || !about || !profilePic || !password) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Check if the username already exists
        const isExist = await User.findOne({ userName });
        console.log("Existing User:", isExist);

        if (isExist) {
            return res.status(400).json({
                error: "Username already exists. Please try with another username.",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        // Create and save the new user
        const user = new User({
            channelName,
            userName,
            about,
            profilePic,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            success: "yes",
            data: user,
        });
    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ error: "Server error" });
    }
};


exports.signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ userName });

        // Check credentials
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ userId: user._id }, "its_my_secret_key", {
                expiresIn: "1h", // Token expires in 1 hour
            });

            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // Only secure cookies in production
                sameSite: "strict",
            });

            // Include token in the response JSON
            res.json({
                message: "Logged in successfully",
                success: "true",
                token: token,  // Add this line to return the token
            });
        } else {
            res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};


exports.logout = (req, res) => {
    // Clear the token cookie
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    };

    res.clearCookie("token", cookieOptions).json({
        message: "Logged out successfully",
    });
};
