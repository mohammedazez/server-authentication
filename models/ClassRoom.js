// Import
const mongoose = require("mongoose");

const ClassRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: String,
  floor: Number,
});

// Buat nama databasenya
const ClassRoom = mongoose.model("class-room", ClassRoomSchema);

// Ekspor
module.exports = ClassRoom;
