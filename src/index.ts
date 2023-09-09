const express = require("express");
const app = express();
import {config } from "dotenv";

config();

const port = process.env.PORT || 8080;

app.listen(port, () => { console.log(`listening on port ${port}`) })