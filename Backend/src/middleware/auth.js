const jwt = require("jsonwebtoken");
const Usermodel = require("../Models/user");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization header missing or malformed" });
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(" ")[1].trim();

    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    // Verify the token
    const secret = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret);

    const user = await Usermodel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    console.error("Error in auth middleware:", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  authMiddleware,
};
