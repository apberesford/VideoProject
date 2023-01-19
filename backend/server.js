const express = require('express')
const morgan = require("morgan");
const helmet = require("helmet");
const { get } = require("http");
const port = 8000



express()
    .use(helmet())
    .use(morgan('tiny'))
    .get('/', (req, res) => {
        res.status(200).json({status: 200, message: "test"})
    })

    .listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })