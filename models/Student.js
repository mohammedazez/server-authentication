// Import mongoose
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class-room",
  },
});

// Buat nama databasenya
const Student = mongoose.model("studentss jwt", StudentSchema);

// Ekspor
module.exports = Student;
