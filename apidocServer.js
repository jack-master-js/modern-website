const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/apidoc")));

app.listen(8082, () => {
  console.log(`apidoc listening at http://localhost:8082`);
});
