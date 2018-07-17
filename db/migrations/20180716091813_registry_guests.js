
exports.up = function(knex, Promise) {
  return knex.schema.createTable("registry_guests",(table)=>{
   table.increments();
   table.string("guest_username");
   table.string("guest_pw");
   table.integer("guest_reg_id")
   .notNullable()
   .references('id')
   .inTable('registries')
   .onDelete('CASCADE')
   table.string("guest_first_name");
   table.string("guest_last_name");
   table.text('guest_profile_pic');

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("registry_guests");
};
