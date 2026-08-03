const { model } = require("mongoose");
const path = require("path");

const { HoldingsSchema } = require('../schemas/HoldingsSchema');


const HoldingsModel = model("holding", HoldingsSchema);

console.log("Model paths:", Object.keys(HoldingsModel.schema.paths));

module.exports = { HoldingsModel };