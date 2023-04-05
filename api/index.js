const express = require ('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const port = 8080;
const cors = require('cors');
// const { default: knex } = require('knex');
app.use(cors());
app.use(express.json());

app.get('/home', function(req, res) {
   knex.select('*').from('frisbees')
   .then(data => res.status(200).json(data))
   .catch(err => console.log('there was an error'))
  });

  app.post('/newFrisbee', function(req, res) {
    let frisbee = req.body;
  
    knex.insert(frisbee)
      .into('frisbees')
      .then(data => res.status(200).send("Insert into frisbees was successful!"))
      .catch(err => res.status(404).json(err))
   });
  


  app.listen(port, () => console.log(`Listening on ${port}`))