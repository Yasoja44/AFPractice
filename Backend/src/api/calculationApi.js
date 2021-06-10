const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculationController');

module.exports = function () {
    router.post('/amount', controller.calculateAmount);
    return router;
}