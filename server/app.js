const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

app.use(express.json());

dotenv.config({ path: "./config.env" })
require('./db/conn')
    // const User = require('./model/userschema')


app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000


// app.get('/', (req, res) => {
//     res.send('Hello from Index');
// })

// app.get('/about', (req, res) => {
//     res.send('Hello from about');
// })

// app.get('/servieces', (req, res) => {
//     res.send('Hello from servieces');
// })

// app.get('/contact', (req, res) => {
//     res.send('Hello from contact');
// })

// app.get('/user', (req, res) => {
//     res.send('Hello from userProfile');
// })

// app.get('/login', (req, res) => {
//     res.send('Hello from login');
// })

// app.get('/contact', (req, res) => {
//     res.send('Hello from register');
// })

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/client/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(_dirname, '/client/build/index.html'))
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})