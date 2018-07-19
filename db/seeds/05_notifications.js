
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {notif_reg_id: 1, notif_guest_id: 1, notif_message: "Congratulations! I'm bringing the RV this Christmas! - Cousin Eddie"},
        {notif_reg_id: 1, notif_guest_id: 1, notif_message: "Can't wait to see you at your wedding! - Aunt Barb"},
        {notif_reg_id: 1, notif_guest_id: 1, notif_message: "Thanks for saving me money with this website! - Uncle George"}
      ]);
    });
};
