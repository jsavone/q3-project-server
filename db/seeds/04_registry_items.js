
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registry_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('registry_items').insert([
        {
          prod_id: 1,
          reg_id: 1,
        },

        {
          prod_id: 2,
          reg_id: 1,
        },

        {
          prod_id: 3,
          reg_id: 1,
        },
        {
          prod_id: 10,
          reg_id: 1,
          status: 'fulfilled'
        },
        {
          prod_id: 8,
          reg_id: 1,
          status: 'fulfilled'
        },
      ]);
    });
};
