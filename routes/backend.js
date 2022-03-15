const express = require("express");
const app = express();
let router = express.Router();

const { upload } = require("../multer/uploadFile");
const {
  uploadScore,
  uploadFielding,
  uploadBatting,
} = require("../controller/uploadController");

router.get("/", (req, res) => {
  console.log(req.query.message);
  res.render("../view/upload", {
    title: "Upload csv files",
    message: req.query.message,
  });
});

router.post("/score/csv", upload.single("score"), uploadScore);
router.post("/fielding/csv", upload.single("fielding"), uploadFielding);
router.post("/batting/csv", upload.single("batting"), uploadBatting);

let web = router;
module.exports = web;
