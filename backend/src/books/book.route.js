const express = require('express')
const Book = require('./book.model')
const { postABook, getAllBooks, getSingleBook, UpdateBook } = require('./book.controller')
const router = express.Router()

//frontend =>backend server =>controller =>book schema => database =>send to server =>back to the frontend



//post a book
router.post("/create-book", postABook)

//get all books
router.get("/", getAllBooks)

//single book endpoint
router.get("/:id", getSingleBook)

//update a book endpoint
router.put("/edit/:id", UpdateBook)

// post =when submit something from frontend to db
//get =when get something back from db
//put /patch =when edit or update something
//delete =when delete something





module.exports = router;