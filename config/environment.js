// Import dotenv untuk .env
require("dotenv").config();

// eksport environmet
module.exports = {
  MONGODB_URI_LIVE: process.env.MONGODB_URI_LIVE,
};
