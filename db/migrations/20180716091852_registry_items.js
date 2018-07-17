
exports.up = function(knex, Promise) {
  return knex.schema.createTable("registry_items",(table)=>{
   table.increments();
   table.integer("prod_id")
   .notNullable()
   .references('id')
   .inTable('products')
   .onDelete('CASCADE')
   .index();
   table.integer('reg_id')
   .notNullable()
   .references('id')
   .inTable('registries')
   .onDelete('CASCADE')
   .index();
   table.string('status').defaultTo('unfulfilled');
   table.integer('purchased_guest_id')
   .references('id')
   .inTable('registry_guests')
   .onDelete('CASCADE')
   .index();

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("registry_items");
};
