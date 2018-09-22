/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const DiceController = require('../../controller/diceController');
const diceController = new DiceController();

/**
 * Dice Entity routes
 */
router.get('/count', function (req, res) {
    carController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    diceController.exists(req, res);
});

router.get('/', function (req, res) {

    diceController.findAll(res);
});

router.post('/create', function (req, res) {
    diceController.create(req, res);
});

router.delete('/:id', function (req, res) {
    diceController.deleteById(req, res);
});

module.exports = router;