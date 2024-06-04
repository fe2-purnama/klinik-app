const db = require("../config/db");
const Auth = require("../models/user");
const argon2 = require("argon2");

const getPatient = async (req, res) => {
  try {
    const response = await Auth.findAll({
      attributes: ["name", "gender", "email", "role", "phone", "created_at"],
      where: {
        role: "patient",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getDoctor = async (req, res) => {
  try {
    const response = await Auth.findAll({
      attributes: ["id_doctor", "name", "gender", "email", "role", "spesialist", "phone", "created_at"],
      where: {
        role: "doctor",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUsersById = async (req, res) => {
  try {
    const response = await Auth.findOne({
      attributes: ["name", "gender", "email", "role", "phone", "created_at"],
      where: {
        id_user: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createUsers = async (req, res) => {
  const { id_doctor, name, phone, email, gender, password, confirm_pass, role, spesialist } = req.body;
  if (password !== confirm_pass) return res.status(400).json({ msg: "Password Dan Confirm Password Tidak Cocok" });
  const hashPassword = await argon2.hash(password);
  try {
    await Auth.create({
      id_doctor: id_doctor,
      name: name,
      phone: phone,
      email: email,
      gender: gender,
      password: hashPassword,
      role: role,
      spesialist: spesialist,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateUsers = async (req, res) => {
  const user = await Auth.findOne({
    where: {
      id_user: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  const { name, phone, email, gender, password, confirm_pass, role, spesialist } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confirm_pass) return res.status(400).json({ msg: "Password Dan Confirm Password Tidak Cocok" });
  try {
    await Auth.update(
      {
        name: name,
        phone: phone,
        email: email,
        gender: gender,
        password: hashPassword,
        role: role,
        spesialist: spesialist,
      },
      {
        where: {
          id_user: user.id_user,
        },
      }
    );
    res.status(200).json({ msg: "User Updating" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteUsers = async (req, res) => {
  const user = await Auth.findOne({
    where: {
      id_user: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });

  try {
    await Auth.destroy({
      where: {
        id_user: user.id_user,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getPatient,
  getDoctor,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
};
