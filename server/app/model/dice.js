/**
 * Dice Entity (ES6 Class)
 */

class Dice {
    constructor(id, result, created) {
        this.id = id;
        this.result = result;
        this.created = created;
    }
}

module.exports = Dice;