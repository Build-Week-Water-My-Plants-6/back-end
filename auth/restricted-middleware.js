const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  //    see if there is a token
  //    if there is one, check if it valid =>
  //    rehash the header + payload + secret and see if it matches our verify signature

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log("failed verify", err);
        res.status(401).json({
          message: "not verified"
        });
      } else {
        // token is valid
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({
      message: "no token provided"
    });
  }
};
