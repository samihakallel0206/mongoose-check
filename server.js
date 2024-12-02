//require express
const express = require("express");
//require dotenv
require("dotenv").config();

//instance of express
const app = express();

const connectDB = require("./config/connectDB");
const Person = require("./models/Person");
connectDB();

//toDO: CRUD
//! **************************************************************************************************************
//create One (CREATE)
const newPerson = {
  name: "Salima",
  age: 20,
  email: "salima@gamil.com",
  favoriteFoods: ["lablabi", "hergma"],
};
async function createPerson(newPerson) {
  try {
    const newP = await new Person(newPerson).save();
    console.log("the person is saved successfully", newP);
  } catch (error) {
    console.log(error);
  }
}
// createPerson(newPerson);

//insertMany
const arrayPersons = [
  {
    name: "Khaled",
    age: 20,
    email: "khaled@gamil.com",
    favoriteFoods: ["lablabi", "hergma"],
  },
  {
    name: "Ahmed",
    age: 20,
    email: "Ahmed@gamil.com",
    favoriteFoods: ["lablabi", "hergma"],
  },
  {
    name: "Aziz",
    age: 20,
    email: "aziz@gamil.com",
    favoriteFoods: ["lablabi", "hergma"],
  },
  {
    name: "hamza",
    age: 20,
    email: "hamza@gamil.com",
    favoriteFoods: ["lablabi", "hergma"],
  },
  {
    name: "Omar",
    age: 20,
    email: "omar@gamil.com",
    favoriteFoods: ["lablabi", "hergma"],
  },
  {
    name: "Youssef",
    age: 20,
    email: "youssef@gamil.com",
    favoriteFoods: ["lablabi", "hergma"],
  },
];
async function insertPersons(arr) {
  try {
    const personToInsert = await Person.insertMany(arr);
    console.log("the list of person is", personToInsert);
  } catch (error) {
    console.log(error);
  }
}
// insertPersons(arrayPersons);

//find (READ)
async function showPersons() {
  try {
    const personList = await Person.find();
    console.log("the list of person is ", personList);
  } catch (error) {
    console.log(error);
  }
}

// showPersons();
async function findPerson(id) {
  try {
    const personToFind = await Person.findById(id);
    console.log("the person is", personToFind);
  } catch (error) {
    console.log(error);
  }
}

// findPerson("67459bbd7a5d8c285db23281");
async function findPersonByName(name) {
  try {
    const personToFind = await Person.findOne({ name: name });
    console.log(`the person with this name: ${name}`, personToFind);
  } catch (error) {
    console.log(error);
  }
}
// findPersonByName("Slim");

// UPDATE
async function updateAge(id, age) {
  try {
    const personToUpdate = await Person.findByIdAndUpdate(
      id,
      { $set: { age: age } },
      { new: true }
    );
    console.log("age updated successfully", personToUpdate);
  } catch (error) {
    console.log(error);
  }
}
// updateAge("67459bbd7a5d8c285db23281", 14);

async function updateFood(id, food) {
  try {
    const personToUpdate = await Person.findByIdAndUpdate(
      id,

      { $push: { favoriteFoods: food } },

      { new: true }
    );
    console.log(personToUpdate);
  } catch (error) {
    console.log(error);
  }
}
// updateFood("67459bbd7a5d8c285db23285", "makarouna");

//DELETE
async function deletePerson(id) {
  try {
    const personDeleted = await Person.findByIdAndDelete(id);
    console.log("deleted", personDeleted);
  } catch (error) {
    console.log(error);
  }
}
deletePerson("6745aa8d2f05e1531bc28d76");
// *!end********************************************************************************************************
//PORT
const PORT = process.env.PORT || 7000;

//server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the serevr is running on http://127.0.0.1:${PORT}`);
});
