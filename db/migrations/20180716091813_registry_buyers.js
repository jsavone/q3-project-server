
exports.up = function(knex, Promise) {
  return knex.schema.createTable("registry_buyers",(table)=>{
   table.increments();
   table.string("buyer_username");
   table.string("buyer_pw");
   table.integer("buyer_reg_id")
   table.string("buyer_first_name");
   table.string("buyer_last_name");
   table.text('reg_profile_pic');

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("registry_buyers");
};
