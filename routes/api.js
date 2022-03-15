const express = require("express");
const app = express();
let router = express.Router();

const { login, register } = require("../controller/authController");
const { registervali, loginvali } = require("../controller/authController");
const {
  getscore,
  getbatting,
  getfielding,
} = require("../controller/frontendController");
//const { passport } = require('../Config/passports');

//Auth route
// router.post("/user/login", loginvali, login);
// router.post("/user/register", registervali, register);

router.get("/getscore", getscore);
router.get("/getbatting", getbatting);
router.get("/getfielding", getfielding);

console.log(getscore);

let api = router;
module.exports = api;
