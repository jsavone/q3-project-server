
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registry_guests').del()
    .then(function () {
      // Inserts seed entries
      return knex('registry_guests').insert([
        {
          guest_username: 'grandma01',
          guest_pw: 'pw',
          guest_reg_id: 1,
          guest_first_name: 'Martha',
          guest_last_name: 'Swanson',

        },
      ]);
    });
};
