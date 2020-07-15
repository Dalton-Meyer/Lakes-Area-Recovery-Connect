const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();


router.get("/", (req, res) => {

  const queryText = `SELECT * FROM events JOIN organization ON org_id = event_type ORDER BY event_date ASC`;
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

router.post("/", (req,res) => {
  const event = req.body;
  const type = event.type;
  const location = event.location;
  const name = event.name;
  const date = event.date;
  const time = event.time;
  console.log(req.body)
  const queryText = `INSERT INTO events(event_type, event_name, event_location, event_date, event_time)
  VALUES ($1, $2, $3, $4, $5)`
  pool.query(queryText, [type, name, location, date, time])
  .then(() => console.log('hello'),res.sendStatus(201)).catch((error)=>{console.log(error)})
}) 

router.get("/main", (req, res) => {

    const queryText = `SELECT * FROM events JOIN organization ON org_id = event_type ORDER BY event_date ASC LIMIT 3`;
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
  router.delete("/:id", (req,res) => {
    const id = req.params.id
    const queryText = `DELETE FROM events WHERE id = $1`
    pool.query(queryText, [id])
    .then((result) => {console.log(`Success in deleting event`), res.sendStatus(200)}).catch((error)=>{`problem with deleting event ${error}`})
  })



module.exports = router;