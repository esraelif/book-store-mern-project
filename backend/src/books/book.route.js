const express = require('express')
const Book = require('./book.model')
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller')
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

//delete a book endpoint

router.delete("/:id", deleteABook)





module.exports = router;