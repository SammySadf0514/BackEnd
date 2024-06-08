import express from "express";

let app = express();

let port = 5090;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/apple", (req, res) => {
  res.send("You are in the apple page");
});

app.get("/banana", (req, res) => {
  res.send("You are in the banana page");
});

app.get("/guava", (req, res) => {
  res.send("You are in the guava page");
});

// app.get("/:username", (req, res) => {
//   res.send(`You are in the username page ${req.params.username}`);
//   console.log(req.params);
// });

// app.get("/:username/:id", (req, res) => {
//   res.send(
//     `You are in the username page ${req.params.username} with the id ${req.params.id}`
//   );
//   console.log(req.params);
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("There is no search query");
  } else {
    res.send(`<h1>Query for search results : ${q}</h1>`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
