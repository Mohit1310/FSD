require("./models/db");
require('dotenv').config()

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const employeeController = require("./controllers/employeeControllers");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const login = require('./controllers/login')

app.use(express.json())
app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.use(bodyParser.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("view engine", "hbs");

app.listen(3002, () => {
  console.log("Express server started at port 3002");
});

app.use('/login', login)
app.use("/employee", employeeController);