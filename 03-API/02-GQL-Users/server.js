// ===[ REQ-DEP ]======================================================
const app = require('express')()
const expressGQL = require('express-graphql')
const uschema = require('./schemas/schema1')


// ===[ MIDDLEWARE ]====================================================
app.use('/graphql', expressGQL({              // <---Allows calls to the dev-env-query-tool
    schema: uschema,
    graphiql: true
}))   




// ===[ LISTENER ]======================================================
app.listen(4000, () => {
    console.log("Server Linstening....");
})


