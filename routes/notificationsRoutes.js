const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('notifications').then(notifications => {
    res.json(notifications);
  });
});

router.get('/:id', function(req, res, next) {
  knex('notifications').where('notif_reg_id', req.params.id).then(notifications => {
    res.json(notifications);
  });
});

router.delete('/:id', (req, res) => {
  knex('notifications').where('id', req.params.id).del().then(() => knex('notifications').then(items => res.json(items)))
});

router.post('/', (req, res) => {
  knex('notifications').insert(req.body).then(() => knex('notifications').then(notifs => res.json(notifs)))
});

module.exports = router;
