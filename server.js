// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require ('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const sequelize = new Sequelize(process.env.PG_URI)
try {
sequelize.authenticate().then(() => {   
    console.log(`Connected to the database, ${process.env.PG_URI}${process.env.PG_URI}`)
}).catch(err => {
    console.log(`Error connecting to the database: `, err)
})

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
