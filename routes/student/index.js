var express = require("express");
var router = express.Router();

// Import login contoller
// Import controller
const {
  getAllStudent,
  postStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require("./controller");

// Import auth helper
// Buar router get untuk auth

/* GET users listing. */
router.get("/", getAllStudent);
router.get("/:id", getStudentById);
router.post("/", postStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);
// Buat get untuk login

module.exports = router;
