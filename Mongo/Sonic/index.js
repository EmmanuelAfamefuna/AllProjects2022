// need in order to get sensitve variables from .env file
require("dotenv").config();
const express = require("express");
const app = express();

// Connection
const mongoose = require("mongoose");
const { DB, URI } = process.env;

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

// Blueprints
//      Schemas
let characterSchema = new mongoose.Schema({
  name: String,
  animal: String,
  villain: {
    type: Boolean,
    // required: [true, "Nelly said I had to!!!"]
    default: false
  },
  age: {
    type: Number,
    min: [15, "You are too young"],
    max: 21
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

//   Model
let CharacterModel = new mongoose.model("characters", characterSchema);


// Queries
/*  let Character = new CharacterModel({
  name: "Sonic", 
  animal: "hedgehog",
  villain: false,
  age: 16
}) */
 
/*   let Character = new CharacterModel({
   name:"Knuckles",
   animal:"echidna",
   villain: false,
   age: 18
 })  */

  let Character = new CharacterModel({
   name: "Eggman",
   animal: "human",
   villain: true,
   age: 66
 }) 



// CREATE
// NOTE: use this if you have used the model to construct your document
Character.save((err, char)=>{
  if(err) console.log(`Error saving to database: ${err}`)
  else console.log(`Data saved to database: ${char}`)
})

// NOTE: Use this to construct and save document at same time
/*  CharacterModel.create({
   name: "Tails",
   age: 12,
   villain: false,
   animal: "fox"
 },
 (err, char)=>{
   if(err) console.log(err)
   else console.log(char)
 }) */

// READ
// NOTE: finds ALL documents
// TODO: try passing in a different filter (like we did with friends demo)
// to retrieve only specific documents
CharacterModel.find({}, (err, chars)=>{
  if(err) console.log("error reading from database: ", err)
  else console.log(`Here are the results of reading from database: ${chars}`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sonic App on port ${PORT}`));