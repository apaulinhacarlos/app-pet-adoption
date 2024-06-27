const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).send({ error: 'Unauthorized: token is required' });
  try {
    jwt.verify(token, jwtSecret);
    next();
  } catch (err) {
    return res.status(401).send({ error: 'Unauthorized: invalid token' });
  }
};