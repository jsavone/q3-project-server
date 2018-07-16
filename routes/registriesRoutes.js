const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('registries').then(registries => {
    res.json(registries);
  });
});

module.exports = router;
