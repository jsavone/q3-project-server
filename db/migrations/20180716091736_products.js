
exports.up = function(knex, Promise) {
  return knex.schema.createTable("products",(table)=>{
   table.increments();
   table.string("prod_name");
   table.text('prod_desc');
   table.text('img_url')
   table.decimal('msrp')
   table.decimal('amazon_sale_price')
   table.text('amazon_prod_url')
   table.decimal('macys_sale_price')
   table.text('macys_prod_url')
   table.decimal('wm_sale_price')
   table.text('wm_prod_url')
   table.string('upc')

   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products");
};
