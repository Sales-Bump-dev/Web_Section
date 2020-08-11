const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const marketRouter = require("./routes/market")

app.use("api/v1/market", marketRouter)


app.listen(port, () => {
   console.log('Server is up!');
});