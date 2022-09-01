const handler = require('./Calculator')
const PORT = 3001;

function route(app){
    app.get('/calc', handler)
    app.post('/calc', handler)
    app.listen(PORT)
}

module.exports = route;