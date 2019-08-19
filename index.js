const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

const uri = "mongodb+srv://gogo:topsecret@cluster0-pn9xi.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connection is successful"))

app
.use(cors())
.use(express.json())
.listen(port, () => console.log(`Listening on port ${port}`))
