require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("dev"));

app.use(express.static("../client"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CONNECTION
const mongoose = require("mongoose");
const { DB, URI } = process.env;
// const DB = process.env.DB;
// const URI = process.env.URI
const url = `${URI}/${DB}`;
let connectionObject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "acc",
  pass: "acc_rocks_2020",
};
mongoose
  .connect(url, connectionObject)
  .then(() => {
    console.log(`Connected to the ${DB} database`);
  })
  .catch((err) =>
    console.log(`Issues connecting to the ${DB} database: `, err)
  );

// BLUEPRINTS
// Schema
let bucketSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Faild to add a description"]
  },
  isComplete: {
    type: Boolean,
    default: false
  }
});

// Model
let BucketModel = new mongoose.model("bucketlist", bucketSchema)

// QUERIES
// Create
//Read
//Update
//Delete


app.get("/", (req, res) => {
  res.send("Root route for BucketList Server");
});

// Read - GET
app.get("/bucket", (req, res) => {
  BucketModel.find({}, (err, items) => {
    console.log(items)
     if(err) res.json("There is an error reading data from database")
     else if(items.lenght === 0) console.log ("No data to read")
     else res.status(200).json(items);
  })
});

// Create
app.post("/bucket", (req, res) => {
  let bucketItem = new BucketModel({
    description: req.body.description,
  });
  bucketItem.save((err, item) =>{
    if(err) res.json("There is an error posting data to database")
    else console.log(item)
  })
  res.json(tempItem);
});

// Delete
app.delete("/bucket/:id", (req, res) => {
  let requestedId = req.params.id;
  BucketModel.findByIdAndDelete(requestedId, (err, items) => {
    if(err) res.status(404). send({
      error: "Oops something went wrong!!",
    });
    else res.json(items)
  })
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
  let requestedId = req.params.id;
  BucketModel.findById(requestedId, (err, item) =>{
    if(err) res.json("Error finding item in database to update")
    else {
      item.isComplete = !item.isComplete
      item.save((error, updatedItem) => {
        if(error) res.json("Error updating bucket item");
        else res.json(updatedItem);
      })
    }
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bucket server on port ${PORT}`));

