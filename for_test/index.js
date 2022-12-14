const express = require("express");
const app = express();
const port = 8080;
const router = require("./routes");
const path = require("path");

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

const dotenv = require('dotenv');
dotenv.config({path : path.join(__dirname, './.env')});

app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, () => {
  console.log("server open: ", port);
});
