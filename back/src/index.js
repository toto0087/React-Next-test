const express = require("express");

const app = express();

const port = process.env.PORT || 9000;

app.listen(port,() => console.log("server running on port",port));