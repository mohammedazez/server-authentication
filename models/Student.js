// Import mongoose
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class-room",
  },
});

// Buat nama databasenya
const Student = mongoose.model("studentss", StudentSchema);

// Ekspor
module.exports = Student;
