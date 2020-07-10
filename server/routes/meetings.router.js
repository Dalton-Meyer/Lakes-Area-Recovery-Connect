const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// start GET to /movies
router.get("/", (req, res) => {
    const meet = req.body;
  // setting query text to select all movies
  const queryText = `SELECT * FROM meeting 
  JOIN town ON location_id = town_id 
  JOIN Organization ON org_id = meeting_id 
  WHERE town_id = $1
  WHERE org_id = $2`;
  pool
    .query(queryText)
    .then((result) => {
      console.log('Success in getting movies!');
      res.send(result.rows); // send the result --> the movies
    })
    .catch((error) => {
      console.log(`Error on GET with query ${error}`);
      res.sendStatus(500); // if there is an error, send server error 500
    });
});
// end GET to /movies


module.exports = router;