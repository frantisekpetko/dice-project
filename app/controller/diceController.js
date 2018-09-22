/* Load Car Data Access Object */
const DiceDao = require('../dao/diceDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Dice = require('../model/dice');

/**
 * Car Controller
 */
class DiceController {

    constructor() {
        this.diceDao = new DiceDao();
        this.common = new ControllerCommon();
    }

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.diceDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.diceDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let dice = new Dice();
        if (req.body.id) {
            dice.id = req.body.id;
        }
        dice.result = req.body.result;

        if (req.body.id) {
            return this.diceDao.createWithId(dice)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.diceDao.create(dice)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.diceDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.diceDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = DiceController;