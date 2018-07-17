
exports.up = function(knex, Promise) {
  return knex.schema.createTable("notifications",(table)=>{
   table.increments();
   table.integer("notif_reg_id")
   .notNullable()
   .references('id')
   .inTable('registries')
   .onDelete('CASCADE')
   table.integer("notif_guest_id")
   .notNullable()
   .references('id')
   .inTable('registry_guests')
   .onDelete('CASCADE')
   table.text('notif_message');
   table.boolean("notif_completed").defaultTo(false);

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("notifications");
};
