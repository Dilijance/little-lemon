const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/dbConnection')

require("dotenv").config();
dbConnect();

const app = express();
const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});