
exports.up = function(knex, Promise) {
  return knex.schema.createTable("registries",(table)=>{
   table.increments();
   table.string("reg_username");
   table.string("reg_pw");
   table.string("reg_type").defaultTo('wedding')
   table.string("reg_first_name");
   table.string("reg_last_name");
   table.text('reg_description');
   table.text('reg_profile_pic');

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("registries");
};
