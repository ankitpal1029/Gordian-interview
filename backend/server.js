const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


const {
    PORT = 5000,
    NODE_ENV= 'development',
    SESSION_SECRET='secret'
} = process.env;


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({ origin: 'http://localhost:3000',
                credentials:true}));



app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized:true,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: parseInt(3600000),

    }
}));


const server = app.listen(process.env.PORT||4000,function(){
    console.log(`Server is up on port ${PORT}`);
})

app.use(authRoutes);
