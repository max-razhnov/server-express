const port = 5000 || process.env.PORT;
const express = require("express");
const app = express();

app.use("/", (request, response) => {
  console.log(request.url);
  response.send("Hi from express");
});

app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send("you broke server");
});

app.listen(port);
