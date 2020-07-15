const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// start GET to /movies
router.get("/:town/:meeting", (req, res) => {
    const meet = req.body;
    const town = req.params.town;
    const meeting = req.params.meeting;
    console.log(req.params.meeting)
 
  const queryText = `SELECT * FROM meeting 
  JOIN town ON location_id = town_id 
  JOIN Organization ON org_id = meeting_id 
  WHERE town_id = $1
  AND org_id = $2`;
  pool
    .query(queryText, [town, meeting])
    .then((result) => {
      console.log('Success in getting meetings!');
      res.send(result.rows); 
    })
    .catch((error) => {
      console.log(`Error on GET with query ${error}`);
      res.sendStatus(500); 
    });
});



module.exports = router;