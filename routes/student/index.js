var express = require("express");
var router = express.Router();

// Import controller
const {
  getAllStudent,
  postStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getStudentInClass,
  loginStudent,
} = require("./controller");

// Import auth helper
const { auth } = require("../../helper/auth")
// Auth adalah penengahnya, jika tidak lolos di auth maka "Hallo user tidak muncul"
router.get("/me", auth, (req, res) => {
  res.json({
    message: "hallo user",
    user: req.body
  })
})

/* GET users listing. */
router.get("/", getAllStudent);
router.get("/:id", getStudentById);
router.post("/", postStudent);
router.put("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);
router.get("/class/:id", getStudentInClass);
router.post("/login", loginStudent);


// Ekspor
module.exports = router;
