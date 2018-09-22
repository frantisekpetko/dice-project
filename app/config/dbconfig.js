/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    db.run("CREATE TABLE if not exists dice (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " result INT," +
        " created DATETIME DEFAULT CURRENT_TIMESTAMP" +
        ")");

 /*   db.run("CREATE TABLE if not exists driver (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " car INT" +
        ")");*/
};

module.exports = {
    init: init,
    db: db
};

