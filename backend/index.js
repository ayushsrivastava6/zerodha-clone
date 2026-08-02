require('dotenv').config();
const dns = require('dns');

// Force Node to use Google's Public DNS servers directly
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB Connected")
});