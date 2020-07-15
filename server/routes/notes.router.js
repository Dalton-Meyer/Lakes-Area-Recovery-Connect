const express = require("express");
const pool = require("../modules/pool");
const { route } = require("./user.router");
const moment = require('moment');

const router = express.Router();


router.get("/:id", (req, res) => {
  const id = req.params.id
  const queryText = `SELECT * FROM notes WHERE user_id = $1  ORDER BY date ASC`;
  pool
    .query(queryText, [id])
    .then((result) => {
      console.log('Success in getting notes!');
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on GET with query ${error}`);
      res.sendStatus(500); 
    });
});

router.post("/", (req,res) => {
    const info = req.body
    const user = info.user;
    const note = info.note;
    const title = info.title;
    console.log(info)
    const queryText = `INSERT INTO notes(user_id, note, title, date)
    VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [user, note, title, moment()])
    .then((result) => {res.sendStatus(201)}).catch((error)=>{res.sendStatus(500)})
})

router.delete("/:id", (req,res) => {
  const id = req.params.id
  const queryText = `DELETE FROM notes WHERE id = $1`
  pool.query(queryText, [id])
  .then((result) => {res.sendStatus(200), console.log(`Success in deleting note`)}).catch((error)=>{`problem with deleting not ${error}`})
})

router.put("/", (req, res) => {
    const info = req.body;
    
    const queryText = `UPDATE notes SET title=$1, note=$2 WHERE id=$3`;
    console.log(req.body)
    pool
      .query(queryText, [info.title, info.note, info.editId])
      .then((result) => {
        res.sendStatus(200)
        console.log("Success in updating note!");
      })
      .catch((error) => {
        console.log(`Error on PUT with query ${error}`);
        res.sendStatus(500); // if there is an error, send server error 500
      });
  });



module.exports = router;