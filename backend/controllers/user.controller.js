import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

//desc Register user
//route POST /
//access Public
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();
    await generateToken(res, user._id);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//desc Login user
//route POST /api/users/login
//access Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "User not found!" });
    } else if (!(await user.matchPassword(password))) {
      res.status(401).json({ error: "Wrong password" });
    } else {
      await generateToken(res, user._id);
      res.status(200).json({ success: true, data: user });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
};

//@desc Logout user /clear cookie
//@route POST /api/users/logout
//@access Private
export const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true, // cookie only accessible by the web server );
    expires: new Date(0),
  });

  res.status(200).json({ success: true, message: "Logged out successfully" });
};

//@desc Update user
//@route PUT /api/users/
//@access Private
export const updateUser = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.targetCalory = req.body.targetCalory || user.targetCalory;
    user.password = req.body.password || user.password;

    await user.save();
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//@desc Delete user /clear cookie
//@route DELETE /api/users/
//@access Private
export const deleteUser = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    await User.findByIdAndDelete(userId);

    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
