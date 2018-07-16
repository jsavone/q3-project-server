
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registries').del()
    .then(function () {
      // Inserts seed entries
      return knex('registries').insert([
        {reg_username: 'happy_couple', reg_pw: 'pw', reg_first_name: 'Adrienne', reg_last_name: 'Savone', reg_description: "We're so happy to celebrate our marraige in October. Thank you for looking at our registry. Can't wait to see you all soon!", reg_profile_pic: ''},
      ]);
    });
};
