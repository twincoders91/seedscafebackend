require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const artWorkDatas = require("./router/artworkData");
const artistDatas = require("./router/artistData");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

app.use("/artwork", artWorkDatas);
app.use("/artist", artistDatas);

const PORT = process.env.PORT || 5006;
app.listen(PORT);
