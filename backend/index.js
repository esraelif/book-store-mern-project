const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT || 5000

//elifesratunca
//09a1XzEGKHT3Gfoi

//mongodb+srv://elifesratunca:09a1XzEGKHT3Gfoi@cluster0.5ol4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
        res.send('Book Store Server is running!')
    })


}
main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})