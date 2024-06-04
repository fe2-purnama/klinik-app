const Auth = require("../models/user");
const argon2 = require("argon2");

const login = async (req, res) => {
  const user = await Auth.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });
  req.session.userId = user.id_user;
  const id_user = user.id_user;
  const name = user.name;
  const email = user.email;
  const gender = user.gender;
  const role = user.role;
  res.status(200).json({ id_user, name, email, gender, role });
};

const registrasi = async (req, res) => {
  const { name, phone, email, gender, password, confirm_pass, role } = req.body;
  if (password !== confirm_pass) return res.status(400).json({ msg: "Password Dan Confirm Password Tidak Cocok" });
  const hashPassword = await argon2.hash(password);
  try {
    await Auth.create({
      name: name,
      phone: phone,
      email: email,
      gender: gender,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const profile = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon Login Ke Akun Anda" });
  }
  const user = await Auth.findOne({
    attributes: ["id_user", "name", "email", "gender", "role"],
    where: {
      id_user: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  res.status(200).json(user);
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak Dapat Logout" });
    res.status(200).json({ msg: "Anda Telah Logout" });
  });
};

module.exports = {
  login,
  registrasi,
  logout,
  profile,
};
