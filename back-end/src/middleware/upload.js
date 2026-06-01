const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../../uploads"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nome = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, nome);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const tipos = /jpeg|jpg|png|gif|webp/;
    const extOk = tipos.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = tipos.test(file.mimetype.split("/")[1]);
    if (extOk && mimeOk) {
      cb(null, true);
    } else {
      cb(new Error("Apenas imagens (jpeg, jpg, png, gif, webp) são permitidas"));
    }
  },
});

module.exports = upload;
