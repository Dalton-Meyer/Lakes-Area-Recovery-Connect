const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();


router.get("/:id", (req, res) => {
  const type = req.params.id
  const queryText = `SELECT * FROM contact WHERE contact_type = $1 `;
  pool
    .query(queryText, [type])
    .then((result) => {
      console.log('Success in getting contacts!');
      res.send(result.rows); 
    })
    .catch((error) => {
      console.log(`Error on GET with query ${error}`);
      res.sendStatus(500); 
    });
});

router.post("/", (req, res) => {
    const contact = req.body;
    const queryText = `INSERT INTO contact (contact_name, contact_phone, added_by, contact_type)
    VALUES($1,$2,$3,$4,)`
    pool.query(queryText, [contact.name, contact.phone, contact.added, contact.type])
    .then(()=>{
        console.log(`Success in adding contact`)
    }).catch((error)=>{`problem with adding contact${error}`})
})



module.exports = router;