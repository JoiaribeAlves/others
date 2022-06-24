import express from "express";
import multer from "multer";

import { storage } from "./multerConfig";

const upload = multer({ storage });
const app = express();
const port = 4000;

app.use("/files", express.static("uploads"));

app.post("/upload", upload.single("file"), (req, res) => {
  return res.json(req.file?.filename);
});

app.listen(port, () => console.log("Server is running..."));
