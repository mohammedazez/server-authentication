// Import mongoose
const mongoose = require("mongoose");

// Import environment dan file .env
const { MONGODB_URI_LIVE } = require("./environment");

// Konekan URI
mongoose.connect(MONGODB_URI_LIVE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ekspor
const database = mongoose.connection;
module.exports = database;
