const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/reviews', reviewController.getReviews);
router.get('/reviews/id/:id', reviewController.getReviewById);
router.get('/reviews/user/:id', reviewController.getReviewsByUserId);
router.get('/reviews/doctor/:id', reviewController.getReviewsByDoctorId);
router.post('/reviews', reviewController.createReview);
router.put('/reviews/:id', reviewController.updateReview);
router.delete('/reviews/:id', reviewController.deleteReview);

module.exports = router;

