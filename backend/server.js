const express = require('express');
const session = require('express-session');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(session(f{
    cookie: {
        maxAge:3600000,

    }
}))

const server = app.listen(process.env.PORT||4000,function(){
    console.log("Server is up on port 4000");
})
