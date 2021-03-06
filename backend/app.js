var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require('cors')
var indexRouter = require("./routes/index");
var newsRouter = require('./routes/news')
var rappelRouter = require('./routes/rappel')
var banqueRouter = require('./routes/banque')



var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use('/news', newsRouter)
app.use('/rappel', rappelRouter)
app.use('/banque', banqueRouter)
module.exports = app;
