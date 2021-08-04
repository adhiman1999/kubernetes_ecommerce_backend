const express = require("express");
const helmet = require("helmet");
const db = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const DB_HOST = process.env.DB_HOST;

const app = express();
db.connect(DB_HOST);
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
