const Auth = require("../models/user");

const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "Mohon Login Ke Akun Anda" });
  }
  const user = await Auth.findOne({
    where: {
      id_user: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  req.userId = user.id_user;
  req.role = user.role;
  next();
};

const adminOnly = async (req, res, next) => {
  const user = await Auth.findOne({
    where: {
      id_user: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
  if (user.role != "admin") return res.status(403).json({ msg: "Akses Terlarang" });
  next();
};

module.exports = {
  verifyUser,
  adminOnly,
};
