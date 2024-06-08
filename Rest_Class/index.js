const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

const port = 5090;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

let same = 123;

let posts = [
  {
    id: uuid(),
    username: "sammysadf0514",
    post: "Not feeling well today",
  },
  {
    id: uuid(),
    username: "safiaq_ueen",
    post: "I love you @sammysadf0514",
  },
  {
    id: uuid(),
    username: "macet",
    post: "Addmission open for 2024-28",
  },
  {
    id: uuid(),
    username: "macet",
    post: "Addmission open for 2024-28",
  },
  {
    id: uuid(),
    username: "apnaCollege",
    post: "Delta Batch 4.0 Started",
  },
  {
    id: uuid(),
    username: "iplT20",
    post: "CSK vs MI today at 7:30 PM",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((post) => post.id == id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newPost = req.body.post;
  let post = posts.find((post) => post.id == id);
  post.post = newPost;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((post) => post.id == id);
  console.log(post);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id != id);
  res.redirect("/posts");
});

app.post("/posts", (req, res) => {
  let { username, post } = req.body;
  let id = uuid();
  posts.push({ id, username, post });
  console.log(req.body);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
