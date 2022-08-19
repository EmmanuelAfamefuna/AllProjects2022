const express = require("express");
const app = express();
if(process.env.NODE_ENV != 'production') {
  const logger = require("morgan");
  app.use(logger("dev"));
}
app.use(express.static("../client"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const credentials = {
  host: "server.accsoftwarebootcamp.com",
  port: 5432,
  database: "acc",
  user: "acc",
  password: "acc_rocks_2021"
}
// CONNECTION
const { Client } = require("pg");
const conn = new Client(credentials);
conn
  .connect()
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.log(`Error connecting to db.`));

// BLUEPRINTS
//   Schema - DONE by the DBA when tables created
//   Model - DONE by DBA
// QUERIES
//    Create - INSERT
//    Read - SELECT
//    Update - UPDATE
//    Delete - DELETE
const userId = 35;
app.get("/", (req, res) => {
  res.send("Root route for BucketList Server");
});

// Read - GET
app.get("/bucket", (req, res) => {
  let query = `SELECT id AS _id,
                      id,
                      description,
                      iscomplete AS "isComplete"
              FROM bucketlist.bucketlist
              WHERE user_id = ${userId};`
  conn
    .query(query)
    .then(todos => { 
      // console.log(todos)
      res.status(200).json(todos.rows)
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({"message": "There is an error reading from db"});
    });
});
// Create
app.post("/bucket", (req, res) => {
  let query = `INSERT INTO bucketlist.bucketlist (description, iscomplete, user_id)
                VALUES ('${req.body.description}', false, ${userId})
                RETURNING *;`
  conn
  .query(query)
  .then(todo => {
    res.status(200).json(todo.rows[0])})
  .catch(err => res.status(444).json("There is an error posting to db"));
});

// Delete
app.delete("/bucket/:id", (req, res) => {
  let query = `DELETE FROM bucketlist.bucketlist
          WHERE id = ${req.params.id}
          AND user_id = ${userId}
          RETURNING *;`;
  conn
    .query(query)
    .then(todo => {
      res.status(200).json(todo.rows[0]);
    })
    .catch(err => res.status(444).json("There is an error deleting to db"));
});


/*  if (requestedItemIndex !== -1) {
    res.json(bucketArray);
  } else {
    res.status(404).send({
      error: "Oops something went wrong!!!!",
    });
  }
}); */

// Update - PUT
app.put("/bucket/:id", (req, res) => {
  let query = `UPDATE bucketlist.bucketlist
                SET iscomplete = NOT iscomplete
              WHERE id = ${req.params.id}
              AND user_id = ${userId}
              RETURNING *;`;

conn
  .query(query)
  .then(todo => {
  res.status(200).json(todo.rows[0]);
})
  .catch(err => res.status(444).json("There is an error deleting to db"));

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bucket server on port ${PORT}`));




var doubleAndFilter = arr => arr
.map(val => val * 2)
.filter(num => num % 3 === 0);