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
    req_type: req.body.reg_type,
    reg_fist_name: req.body.first_name,
    reg_last_name: req.body.last_name,
    req_description: req.body.description
  }).then(() => knex('registries').then(registries => res.json(registries)))
});

router.get('/:id', (req, res) => {
  knex('registries').where('id', req.params.id).then(registries => {
    res.json(registries);
  });
});


module.exports = router;
