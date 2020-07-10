const express = require("express");
const pool = require("../modules/pool");
const { route } = require("./user.router");

const router = express.Router();


router.get("/", (req, res) => {
 
  const queryText = `SELECT * FROM Notes ORDER BY date ASC`;
  pool
    .query(queryText)
    .then((result) => {
      console.log('Success in getting notes!');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on GET with query ${error}`);
      res.sendStatus(500); 
    });
});

route.post("/", (req,res) => {
    const note = req.body
    const queryText = `INSERT INTO Notes(user_id, note, note_title, date)
    VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [])
    .then((result) => {console.log(`Success in adding note`)}).catch((error)=>{`problem with adding not ${error}`})
})

router.put("/", (req, res) => {
    const note = req.body;
    
    const queryText = `UPDATE Notes SET title=$1, description=$2 WHERE id=$3`;
    console.log(req.body)
    pool
      .query(queryText, [note.title, note.note, note.id])
      .then((result) => {
        console.log("Success in updating note!");
        res.send(result.rows); 
      })
      .catch((error) => {
        console.log(`Error on PUT with query ${error}`);
        res.sendStatus(500); // if there is an error, send server error 500
      });
  });



module.exports = router;