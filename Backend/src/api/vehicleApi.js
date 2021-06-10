const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicleController');

module.exports = function () {
  router.post('/create', controller.createVehicle);
  router.get('/', controller.getVehicle);
  //router.get('/amount', controller.calculateAmount);
  return router;
}