
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registry_buyers').del()
    .then(function () {
      // Inserts seed entries
      return knex('registry_buyers').insert([
        {
          buyer_username: 'grandma01',
          buyer_pw: 'pw',
          buyer_reg_id: 1,
          buyer_first_name: 'Martha',
          buyer_last_name: 'Swanson',

        },
      ]);
    });
};
