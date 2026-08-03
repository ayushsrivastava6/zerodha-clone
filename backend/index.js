require('dotenv').config();
const dns = require('dns');

// Force Node to use Google's Public DNS servers directly
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const cors=require('cors');
const {PositionsModel}=require('./model/PositionsModel');
const { HoldingsModel } = require('./model/HoldingsModel');
const app=express();

app.use(cors());
app.use(bodyParser.json());

//  app.get('/addPositions',(req,res)=>{
//    let tempPositions=[
//    {
//      product: "CNC",
//      name: "EVEREADY",
//      qty: 2,
//      avg: 316.27,
//      price: 312.35,
//      net: "+0.58%",
//      day: "-1.24%",
//      isLoss: true,
//    },
//    {
//      product: "CNC",
//      name: "JUBLFOOD",
//      qty: 1,
//      avg: 3124.75,
//      price: 3082.65,
//      net: "+10.04%",
//      day: "-1.35%",
//      isLoss: true,
//    },
//  ]
//    tempPositions.forEach((item)=>
//      let newPosition=new PositionsModel({
//        product: item.product,
//        name: item.name,
//        qty: item.qty,
//        avg: item.avg,
//        price: item.price,
//        net: item.net,
//        day: item.day,
//        isLoss: item.isLoss,
//      }
//      newPosition.save();
//    });
//   res.send("Done");
// })

app.get('/allHoldings', async (req,res)=>{
  let allHoldings=await HoldingsModel.find({});
  res.json(allHoldings);
})
app.get('/allPositions', async (req,res)=>{
  let allPositions=await PositionsModel.find({});
  res.json(allPositions);
})




mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });