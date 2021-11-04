export default async (req, res, next) => {
  if (req.url != "/api/login") {
    if (req.cookies["token"]) {
      return next();
    } else {
      res.status(401).end();
    }
  } else {
    next();
  }
};
