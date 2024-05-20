const CookieToken = (user, res) => {
  const token = user.generateAccessToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  res.cookie("token", token, options).json({
    success: true,
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      phoneNumber: user.phoneNumber,
    },
  });
};

export { CookieToken };
