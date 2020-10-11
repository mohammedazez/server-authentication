// Import model
const { ClassRoom } = require("../../models");

module.exports = {
  // Read by all
  getAllClass: (req, res) => {
    ClassRoom.find()
      .then((result) => {
        res.status(200).json({
          message: "Sukses mendapatkan data Class",
          result,
        });
      })
      .catch((error) => {
        res.status(404).json("data tidak ditemukan", error);
      });
  },
  // Read by id
  getClassById: async (req, res) => {
    const classRooms = await ClassRoom.findById(req.params.id);
    try {
      res.json({
        message: "Sukses mendapatkan data Class berdasarkan ID",
        classRooms,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  // Create
  postClass: async (req, res) => {
    const classRooms = await ClassRoom.create(req.body);
    try {
      res.json({
        message: "Sukses menambahkan data Class",
        classRooms,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  // Update by id
  updateClassById: async (req, res) => {
    const classRooms = await ClassRoom.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    try {
      res.json({
        message: "Sukses update data Class",
        classRooms,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // Delete by id
  deleteClassById: async (req, res) => {
    const Class = await ClassRoom.findByIdAndDelete(req.params.id, req.body);
    try {
      res.json({
        message: "Sukses hapus data Class",
        Class,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
