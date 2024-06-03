require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/' , (req,res) => {
//     res.send('Server is Ready');
// });

const cors = require('cors');
const crossOrigin = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route');


const allowedOrigins = [
    'http://localhost:5173',
    'https://fasal-assignment-mihir.vercel.app'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS origin'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(crossOrigin(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI,).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id : 1,
            title : 'A Joke',
            content : 'This is a joke1',
        },
        {
            id : 2,
            title : 'Nice Joke',
            content : 'This is a joke2',
        },
        {
            id : 3,
            title : 'Nice Ahead Joke',
            content : 'This is a joke3',
        },
        {
            id : 4,
            title : 'Ok Joke',
            content : 'This is a joke4',
        },
    ]
    res.send(jokes);
});



app.get('/api/movies', async(req,res) => {
    try{
        const movieTitle = req.query.title;
        const data =  await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=7aa92d7`);
        const result = await data.json();
        res.send(result);
    }catch(err){
        res.send("Fetching Error ! Please Contact To Team");
    }
});

app.use('/api/user', userRoutes);


app.listen(PORT,()=> console.log(`Server is Started on ${PORT} `));