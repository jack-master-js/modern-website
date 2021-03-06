import multer from "multer";
import md5 from "md5";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      // if (!req.body.name) throw Error("need name field.");
      cb(null, `config/public/uploads/`);
    } catch (error) {
      cb(error);
    }
  },
  filename: function (req, file, cb) {
    const original = file.originalname.split(".");
    cb(null, `${original[0]}-${md5(file.stream)}.${original[1]}`);
  },
});

export default multer({ storage: storage });
