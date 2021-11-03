import logger from "../_common/utils/logger";
import multer from "../_common/utils/multer";

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
  }
};
