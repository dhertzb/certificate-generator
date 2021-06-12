import multer from "multer";
import path from "path";
export default {
  dest: path.resolve("server", "assets"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("server", "assets"));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
};
