const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { db } = require("./config/db");
const details = require("./routes/details");


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/details", details);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Up and Running`);
});

db();