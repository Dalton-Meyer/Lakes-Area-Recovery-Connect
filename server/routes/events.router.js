const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();


router.get("/", (req, res) => {

  const queryText = `SELECT * FROM Notes event BY date ASC`;
  pool
    .query(queryText)
    .then((result) => {
      console.log('Success in getting events!');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on GET with query ${error}`);
      res.sendStatus(500); // if there is an error, send server error 500
    });
});

router.get("/home", (req, res) => {

    const queryText = `SELECT * FROM Notes event BY date ASC LIMIT 3`;
    pool
      .query(queryText)
      .then((result) => {
        console.log('Success in getting events!');
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error on GET with query ${error}`);
        res.sendStatus(500); // if there is an error, send server error 500
      });
  });



module.exports = router;