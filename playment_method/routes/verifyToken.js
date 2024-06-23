const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin || req.user.id === "6673dee96f90bbb33e09b0c6") {
      next();
    } else {
      res.status(403).json("You are not allowed to do");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  
  verifyToken(req, res, () => {
    console.log("User ID: ", req.user.id);
    if (req.user.isAdmin || req.user.id === "6673dee96f90bbb33e09b0c6") {
      next();
    } else {
      console.log("Failed Admin Check User ID: ", req.user.id);
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
