const express = require("express");
const colores = require("colors");

const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () =>
  console.log(`Server running on port ${port}`.underline.cyan)
);
