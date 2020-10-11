// Import dotenv
require("dotenv").config()
// Import jwt
const jwt = require('jsonwebtoken');
// import bcrypt
const bcrypt = require('bcryptjs');

// Import model
const { Student } = require("../../models");

module.exports = {
  // Read by all
  getAllStudent: (req, res) => {
    Student.find()
    // hilangkan _V di populate
      .populate("class", "-__v")
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
    // Masukkan bcrypt salt dan hash di post 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    let student = {
      ...req.body,
      password: hash
    }

    console.log(student);
     student = await Student.create(student);
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
  // Buat login integrasi dengan bcrypt dan jwt
  loginStudent: async (req, res) => {
    try{
      // Cari spesifik data email
      const student = await Student.findOne({email: req.body.email})
      console.log(student);

      // Jika student ada maka harus dibuatkan jwtnya
      if(student){
        const pass = bcrypt.compareSync(req.body.password, student.password)
        if(pass){
          const token = jwt.sign(student.toObject(), process.env.SECRET_KEY)
          // Jika berhasil dibuatkan token maka munculkan
          res.json({
            message: "login sukses",
            // Menampilkan token
            token
          })
        } else {
          res.json("password salah")
        }
      } else {
        res.json("user tidak ditemukan")
      }
    } catch(error){
      console.log(error);
    }
  },

  //  buat get student di class
  getStudentInClass: async (req, res) => {
    const students = await Student.find({class: req.params.id})
    try{
      res.json({
        message: "Sukses mendapat data student di class",
        students,
      });
    } catch(error){
      console.log(error);
      res.status(500).send(error);
    }
  }
};
