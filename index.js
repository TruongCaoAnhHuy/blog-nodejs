const express = require("express");
const app = express(); //trả lại đối tượng đại diện nodejs => đối tượng giúp xây dựng web
const port = 3000; //cổng run website

// định nghĩa route
app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;

  res.send("Hello World!");
});

// run
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
