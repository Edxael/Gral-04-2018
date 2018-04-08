
// =====[ Loading Dependencies ]==============================================================
const app = require('express')()
const bodyParser = require('body-parser')
const Data = require('./Data/info.json')

    // ( Middle-Ware )
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))





// =====[ Creating Routes ]===================================================================

// ---------------------------------------------------------------( Get All Records )
app.get('/fortune', (req, res) => {
    console.log("Request for Fortune....")
    res.json(Data)
})

// ----------------------------------------------------------------( Get One Random )
app.get('/fortune/random', (req, res) => {
    res.json( Data[Math.floor(Math.random() * Data.length )] )
})

// ----------------------------------------------------------------( Get One by Id )
app.get('/fortune/:id', (req, res) => {
    console.log(req.params)
    res.json( Data.find((x) => { return x.id == req.params.id }) )
})

// ----------------------------------------------------------------( Add One Record )
app.post('/fortune', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})





// =====[ Server Listener ]===================================================================
app.listen(5000, (err) => {
    if(err) { throw err }
    console.log('Server Up & Running......')
})

