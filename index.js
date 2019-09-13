const port = 5000 || process.env.PORT;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const posts = require("./posts");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  const message = "Hi, this is my test server on node js";
  return response.send(message);
});

app.get("/posts", (req, res) => {
  return res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  return res.send(posts[id]);
});

app.post("/posts", (req, res) => {
  const data = req.body;
  posts.push(data);
  return res.send(posts);
});

app.listen(port, () => {
  console.log(`server start on ${port} port `);
});
