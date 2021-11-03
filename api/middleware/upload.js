import logger from "@api/utils/logger";
import multer from "@api/utils/multer";

export default async (req, res, next) => {
  if (req.url === "/api/upload") {
    const upload = multer.single("file");
    upload(req, res, (err) => {
      if (err) {
        logger.error(err);
        res.send("error");
      } else {
        res.send(`/uploads/${req.file.filename}`);
      }
    });
  } else {
    next();
  }
};
