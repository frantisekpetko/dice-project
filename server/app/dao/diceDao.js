/* Load Dice entity */
const Dice = require('../model/dice');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Dice Data Access Object
 */
class DiceDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM dice";
        return this.common.findAll(sqlRequest).then(rows => {
            let dices = [];
            for (const row of rows) {
                dices.push(new Dice(row.id, row.result, row.created));
            }
            return dices;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM dice";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Creates the given entity in the database
     * @params Dice
     * returns database insertion status
     */
    create(Dice) {
        let sqlRequest = "INSERT into dice (result) " +
            "VALUES ($result)";
        let sqlParams = {
            $result: Dice.result
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Dice
     * returns database insertion status
     */
    createWithId(Dice) {
        let sqlRequest = "INSERT into car (id, result) " +
            "VALUES ($id, $result)";
        let sqlParams = {
            $id: Dice.id,
            $result: Dice.result
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM dice WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM dice WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = DiceDao;