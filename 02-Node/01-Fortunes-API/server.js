const app = require('express')()
// const Data = require('./Data/data')  // <--- I have an error here... 

app.get('/', (req, res) => {
    res.json({ message: "Success..." })
})

app.get('/fortune', (req, res) => {
    console.log("Request for Fortune....")
    res.send("HEllo")
})


app.listen(5000, (err) => {
    if(err) { throw err }
    console.log('Server Up & Running......')
})