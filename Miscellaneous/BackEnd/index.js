const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

const port = 5090;

// let urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(
    `Welcome to the site: <br> Username: ${username} <br> Password: ${password}`
  );
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send(
    `Welcome to the site: <br> Username: ${req.body.username} <br> Password: ${req.body.password}`
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
