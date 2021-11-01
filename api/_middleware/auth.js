export default async (req, res, next) => {
    if (req.url !== '/api/user/login') {
      const sid = req?.cookies?.sid;
      if (!sid) {
        res.status(400);
        res.json({ code: -1, message: 'need login' });
      } else {
        next();
      }
    } else {
      next();
    }
  }
