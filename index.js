const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
testApiRouter = require("./routes/testApi");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use("/testApi", testApiRouter);
app.set("view engine", "ejs");

const port = 8000;
let web = require("./routes/backend");
let api = require("./routes/api");

app.use("/", web);
app.use("/api", api);

app.listen(port);
