const CookieToken = (user, res, tokens) => {
  console.log("Received tokens:", tokens);

  if (!tokens) {
    throw new Error("Tokens are undefined");
  }

  const { accessToken, refreshToken } = tokens;

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  res.cookie("accessToken", accessToken, options);
  res.cookie("refreshToken", refreshToken, options);

  res.json({
    success: true,
    accessToken,
    refreshToken,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      phoneNumber: user.phoneNumber,
    },
  });
};

export { CookieToken };
