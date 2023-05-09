/* eslint-disable import/no-useless-path-segments */
const express = require('express');
const tourControllers = require('./../controllers/tourControllers');
const authController = require('../controllers/authController');

const router = express.Router();

//router.param('id', tourControllers.checkID);
router
  .route('/top-5-cheap')
  .get(
    tourControllers.aliasTopTours,
    tourControllers.getAllTours
  );
router.route('/tour-stats').get(tourControllers.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(tourControllers.getMonthlyPlan);
router
  .route('/')
  .get(authController.protect, tourControllers.getAllTours)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourControllers.deleteTour
  );

module.exports = router;
