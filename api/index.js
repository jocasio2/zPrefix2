const express = require ('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const port = 8080;
const cors = require('cors');
// const { default: knex } = require('knex');

app.use(cors( {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
app.use(express.json());


//GETS
app.get('/frisbees', function(req, res) {
   knex.select('*').from('frisbees')
   .then(data => res.status(200).json(data))
   .catch(err => console.log('there was an error'))
  });

  app.get('/users', function(req, res) {
    knex.select('*').from('users')
    .then(data => res.status(200).json(data))
    .catch(err => console.log('there was an error'))
   });

  app.get('/frisbees/:id', function(req, res) {
    let frisbeeID = req.params.id;

    knex.select('*').from('frisbees').where("id", frisbeeID)
    .then(data => res.status(200).json(data))
    .catch(err => console.log('there was an error'))
   });
/////////



   //Posts
  app.post('/frisbees', function(req, res) {
    let frisbee = req.body;
    
    knex.insert(frisbee)
      .into('frisbees')
      .then(data => res.status(200).send("Insert into frisbees was successful!"))
      .catch(err => res.status(404).json(err))
   });

   app.post('/login', function(req, res) {
    let user = req.body;

    let accepted = false; 
    knex.select('*').from('users')
      .then(users_table => {
        for (users of users_table){
            if (user.username == users.username && user.password == users.password){
                accepted == true; 
            
            res.status(200).send({message: 'Success',
            user: `${users.name}`})
            break
            } else { res.send({message: 'Invalid Username'})}
        }
      })
      .catch(err => res.status(404).json(err))
   });
///////


//DELETES
   app.delete('/frisbees/:id', function(req, res){
    let frisbeeID = req.params.id;
  
    knex("frisbees").where("id", frisbeeID)
      .del()
      .then(data => res.status(200).send("Delete frisbee was successful!"))
      .catch(err => res.status(404).json(err))
  })
/////


  //PUT
  app.put('/frisbees/:id', function(req, res) {

    let frisbee = req.body;
    let frisbeeId = req.params.id

    knex('frisbees').where('id', frisbeeId)
      .update({
        brand: frisbee.brand,
        type: frisbee.type,
        color: frisbee.color, 
        description: frisbee.description,
        img: frisbee.img
      })
      .then(data => res.status(200).send("Insert into frisbees was successful!"))
      .catch(err => res.status(404).json(err))
   });
  //////


  app.listen(port, () => console.log(`Listening on ${port}`))