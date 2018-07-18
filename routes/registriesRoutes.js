const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('registries').then(registries => {
    res.json(registries);
  });
});

router.post('/', (req, res) => {
  knex('registries').insert({
    reg_username: req.body.user_name,
    reg_pw: req.body.pw,
    reg_type: req.body.reg_type,
    reg_first_name: req.body.first_name,
    reg_last_name: req.body.last_name,
    reg_description: req.body.description
  }).then(() => knex('registries').then(registries => res.json(registries)))
});

router.get('/guests', (req, res) => {
  knex('registry_guests').then(items => {
    res.json(items);
  })
});

router.get('/items', (req, res) => {
  knex('registry_items').then(items => {
    res.json(items);
  })
});

router.patch('/items/claim/:item_id/:guest_id', (req, res) => {
  knex('registry_items').where('prod_id', req.params.item_id).update({
    status: 'fulfilled',
    purchased_guest_id: req.params.guest_id
  }).then(() => knex('registry_items').then(items => res.json(items)))
});

router.delete('/items/remove/:id', (req, res) => {
  knex('registry_items').where('id', req.params.id).del().then(() => knex('registry_items').then(items => res.json(items)))
});

router.post('/items/add', (req, res) => {
  knex('registry_items').insert(req.body).then(() => knex('registry_items').then(registries => res.json(registries)))
});

router.post('/guests', (req, res) => {
  knex('registry_guests').insert(req.body).then(() => knex('registries').then(registries => res.json(registries)))
});

router.get('/:id', (req, res) => {
  knex('registries').where('id', req.params.id).then(registries => {
    res.json(registries);
  });
});




module.exports = router;
