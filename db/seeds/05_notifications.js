
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {notif_reg_id: 1, notif_buyer_id: 1, notif_message: "Message number 1"},
        {notif_reg_id: 1, notif_buyer_id: 1, notif_message: "Message number 2"},
        {notif_reg_id: 1, notif_buyer_id: 1, notif_message: "Message number 3"}
      ]);
    });
};
