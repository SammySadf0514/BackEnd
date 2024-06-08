const express = require("express");
const app = express();
const path = require("path");

let port = 5090;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  console.log(username);
  const instaData = require("./data.json");
  const info = instaData[username];
  if (info) {
    const data = instaData[username].name;
    const followers = instaData[username].followers;
    const following = instaData[username].following;
    const posts = instaData[username].posts;
    res.render("instagram.ejs", { data, followers, following, posts });
  } else {
    res.render("error.ejs");
  }
});

app.get("/dice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { num: diceVal });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
