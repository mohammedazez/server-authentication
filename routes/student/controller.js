// Import model
const { Student } = require("../../models");

module.exports = {
  // Read by all
  getAllStudent: (req, res) => {
    Student.find()
      .populate("class")
      .then((result) => {
        res.status(200).json({
          message: "Sukses mendapatkan data student",
          result,
        });
      })
      .catch((error) => {
        res.status(404).json("data tidak ditemukan", error);
      });
  },
  // Read by id
  getStudentById: async (req, res) => {
    const students = await Student.findById(req.params.id);

    try {
      res.json({
        message: "Sukses mendapatkan data student berdasarkan ID",
        students,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  // Create
  postStudent: async (req, res) => {
    const students = await Student.create(req.body);
    try {
      res.json({
        message: "Sukses menambahkan data student",
        students,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  // Update by id
  updateStudentById: async (req, res) => {
    const students = await Student.findByIdAndUpdate(req.params.id, req.body);
    try {
      res.json({
        message: "Sukses update data student",
        students,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // Delete by id
  deleteStudentById: async (req, res) => {
    const students = await Student.findByIdAndDelete(req.params.id, req.body);
    try {
      res.json({
        message: "Sukses hapus data Student",
        students,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
