const express = require("express");
const app = express();
const port = 8080;
const router = require("./routes");

app.set("view engine", "ejs");

app.use("/public/src", express.static(`${__dirname}/public/src`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, () => {
  console.log("server open: ", port);
});