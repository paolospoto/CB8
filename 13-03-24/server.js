const express = require("express");

const app = express();
const router = require("./routes/books");

app.use(router);

app.listen(3000);
