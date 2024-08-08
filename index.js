const express = require("express");
const path = require("path");

const app = express();

const port = 5000;
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/index.html"));
});

app.get("*", (req, res) => {
  res.send("404 not founds");
});
app.listen(port, () => {
  console.log(`server listen on localhost:${port}`);
});
