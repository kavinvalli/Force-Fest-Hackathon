require("dotenv").config();
module.exports = {
  MongoURI: `mongodb+srv://samik:${process.env.PASSWORD}@cluster0.2prrc.mongodb.net/Force-Fest`,
  MongoURI2: `mongodb+srv://samik:${process.env.PASSWORD}@cluster0.2prrc.mongodb.net/Force-Fest-to-do`,
};
