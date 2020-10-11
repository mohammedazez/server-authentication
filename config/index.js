// import database.js
const database = require("./database");

// Import environment
const { MONGODB_URI_LIVE } = require("./environment");

// Ekspor index.js
module.exports = {
  database,
  MONGODB_URI_LIVE,
};
