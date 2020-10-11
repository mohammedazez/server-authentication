var express = require("express");
var router = express.Router();

// Import controller
const {
  getAllClass,
  postClass,
  getClassById,
  updateClassById,
  deleteClassById,
} = require("./controller");

/* GET users listing. */
router.get("/", getAllClass);
router.get("/:id", getClassById);
router.post("/", postClass);
router.put("/:id", updateClassById);
router.delete("/:id", deleteClassById);

module.exports = router;
