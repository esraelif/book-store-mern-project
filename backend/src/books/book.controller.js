const Book = require("./book.model");

const postABook = async (req, res) => {
    try {
        const newBook = await Book({ ...req.body })
        await newBook.save();
        res.status(200).send({ message: "Book posted successfully", book: newBook })
    }
    catch (error) {
        const newBook = await Book({ ...req.body })
        console.error("Error creating book", error)
        res.status(500).send({ message: "Failed to create book" })
    }
}

//get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 })
        res.status(200).send(books)

    } catch (error) {
        console.error("Error fetching book", error)
        res.status(500).send({ message: "Failed to fetch books" })
    }
}


const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({ message: "Book not Found!" })
        }
        res.status(200).send(book)

    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({ message: "Failed to fetch book" })
    }

}
module.exports = { postABook, getAllBooks, getSingleBook }