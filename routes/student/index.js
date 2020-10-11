var express = require("express");
var router = express.Router();

// Import controller
const {
  getAllStudent,
  postStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require("./controller");

/* GET users listing. */
router.get("/", getAllStudent);
router.get("/:id", getStudentById);
router.post("/", postStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);

module.exports = router;
