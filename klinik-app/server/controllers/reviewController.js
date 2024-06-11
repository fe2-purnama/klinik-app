const db = require("../config/db");
const Review = require("../models/review");
const Auth = require("../models/user");

const getReviews = async (req, res) => {
  try {
    const response = await Review.findAll({
      attributes: ["id_review", "id_user", "id_doctor", "review", "created_at"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReviewById = async (req, res) => {
  try {
    const response = await Review.findOne({
      attributes: ["id_review", "id_user", "id_doctor", "review", "created_at"],
      where: {
        id_review: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReviewsByUserId = async (req, res) => {
  try {
    const response = await Review.findAll({
      attributes: ["id_review", "id_user", "id_doctor", "review", "created_at"],
      where: {
        id_user: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getReviewsByDoctorId = async (req, res) => {
  try {
    const response = await Review.findAll({
      attributes: ["id_review", "id_user", "id_doctor", "review", "created_at"],
      where: {
        id_doctor: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createReview = async (req, res) => {
  const { id_user, id_doctor, review } = req.body;
  try {
    await Review.create({
      id_user: id_user,
      id_doctor: id_doctor,
      review: review,
    });
    res.status(201).json({ msg: "Ulasan berhasil dibuat" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateReview = async (req, res) => {
  const review = await Review.findOne({
    where: {
      id_review: req.params.id,
    },
  });
  if (!review) return res.status(404).json({ msg: "Ulasan tidak ditemukan" });

  const { review: updatedReview } = req.body;

  try {
    await Review.update(
      {
        review: updatedReview,
      },
      {
        where: {
          id_review: review.id_review,
        },
      }
    );
    res.status(200).json({ msg: "Ulasan berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteReview = async (req, res) => {
  const review = await Review.findOne({
    where: {
      id_review: req.params.id,
    },
  });
  if (!review) return res.status(404).json({ msg: "Ulasan tidak ditemukan" });

  try {
    await Review.destroy({
      where: {
        id_review: review.id_review,
      },
    });
    res.status(200).json({ msg: "Ulasan berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getReviews,
  getReviewById,
  getReviewsByUserId,
  getReviewsByDoctorId,
  createReview,
  updateReview,
  deleteReview,
};
