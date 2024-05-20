const googleCallback = (req, res) => {
  const token = req.user.token;

  res.redirect(`http://localhost:3000/?token=${token}`);
};

export { googleCallback };
