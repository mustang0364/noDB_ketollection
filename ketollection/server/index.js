const express = require('express');
const bodyParser = require('body-parser');
const con = require(__dirname + '/controller');


const app = express();
app.use(bodyParser.json());

/* CRUD for Collection */
app.get('/api/recipes', con.read);
app.post('/api/recipes', con.create);
app.put('/api/recipes/:id', con.update);
app.delete('/api/recipes/:id', con.delete);


const port = 4000;
app.listen(port, () => console.log('server now listening to port 4000'))