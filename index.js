const express = require("express");
const app = express();
const port = 5000;
app.listen(port, (er) => {
  console.log(`serving is runing on port ${port}`);
});
const users = [
  { id: 1, firstName: "hamza" },
  { id: 2, lastName: "harzi" },
];

app.get("/api/users", (req, res) => {
  res.status(200).json({ x: users });
});
