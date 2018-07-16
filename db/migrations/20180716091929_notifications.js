
exports.up = function(knex, Promise) {
  return knex.schema.createTable("notifications",(table)=>{
   table.increments();
   table.integer("notif_reg_id");
   table.integer("notif_buyer_id");
   table.text('notif_message');
   table.boolean("notif_completed").defaultTo(false);

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("notifications");
};
