const express = require('express')

const app = express();

const mongoose = require('mongoose')

// const users = require('./users')

// mongoose.connect("mongodb://localhost:27017/EmployeeDB",{useNewUrlParser:use}, {useUnifiedTopology:true})

const users = [
    {
        id: 1,
        name: "user 1"
    },
    {
        id: 2,
        name: "user 2"
    },
    {
        id: 3,
        name: "user 3"
    },
    {
        id: 4,
        name: "user 4"
    },
    {
        id: 5,
        name: "user 5"
    },
    {
        id: 6,
        name: "user 6"
    },
    {
        id: 7,
        name: "user 7"
    },
    {
        id: 8,
        name: "user 8"
    },
    {
        id: 9,
        name: "user 9"
    },
    {
        id: 10,
        name: "user 10"
    },
    {
        id: 1,
        name: "user 1"
    }
]

app.get('/users', paginationData(users), (req, res) => {

});

app.get

function paginationData(model) {
    return (req, res, next) => {
        const page = parseInt(req.query.page);

        const limit = parseInt(req.query.limit);
    
        const startIndex = (page - 1) * limit;
    
        const endIndex = page * limit;
    
        const results = {};
    
    if (startIndex > 0) {
    
        results.previous = {
            page : page -1,
            limit:limit
        };
    
    }
    
    if(endIndex < model.length) {
    
        results.next = {
            page : page +1,
            limit:limit
        };
    }
    
        results.result = model.slice(startIndex,endIndex)
    
        res.json(results);
        next()
    }
}

app.listen(3000, () => {
    console.log("Server is listening on Port 3000")
});