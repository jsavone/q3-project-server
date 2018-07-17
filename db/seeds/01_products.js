
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
        prod_name: 'Keurig Elite-K Coffemaker',
        prod_desc: `The Keurig K-Elite Coffee maker blends premium finish and programmable features together to deliver both modern design and the ultimate in beverage customization. With a striking brushed finish and metal details, it's a stylish addition to any kitchen. The Keurig K-Elite Coffee maker features a strong brew setting when you want to brew a bolder cup of Coffee, and an Iced setting to brew hot over ice for a refreshing, full-flavored Iced Coffee. It features five brew sizes, so you can brew 4, 6, 8, 10, or 12oz of your favorite Coffee, tea, hot cocoa, or Iced beverage in under a minute at the touch of a button. Choose from hundreds of delicious varieties of K-Cup pods, or brew your own ground Coffee using the universal My K-Cup reusable Coffee filter (sold separately). in addition to a host of programmable features like temperature control, the Keurig K-Elite Coffee maker provides hot water on demand for instant soups and oatmeal, and the large 75oz removable water filter let you brew 8 Cups between refills.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81I2sEU-C9L._SL1500_.jpg",
        msrp: 249.99,
        upc: '5000197490',
        amazon_sale_price: 155.33,
        amazon_prod_url: 'https://www.amazon.com/Keurig-K-Elite-Temperature-Capability-Programmable/dp/B0788F3R8X/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1531516341&sr=1-3&keywords=keurig+elite',
        macys_sale_price: 169.99,
        macys_prod_url: 'https://www.macys.com/shop/product/keurig-k-elite-brewer?ID=5923105&CategoryID=24732#fn=sp%3D1%26spc%3D1%26ruleId%3D78%26kws%3Dkeurig%20elite%26searchPass%3DallMultiMatchWithSpelling%26slotId%3D1',
        wm_sale_price: 169.99,
        wm_prod_url: 'https://www.walmart.com/ip/Keurig-K-Elite-Single-Serve-K-Cup-Pod-Coffee-Maker-with-Iced-Coffee-Setting-Strength-Control-and-Hot-Water-on-Demand-Brushed-Slate/225142139',
        },

        {
        prod_name: 'KitchenAid Artisan Stand Mixer - Empire Red',
        prod_desc: `Choose from over 20 different colors of the KitchenAid Artisan Series Tilt-Head Stand Mixer for the one that perfectly matches your kitchen design or personality. Easily make your favorite cakes and multiple batches of cookie dough with the 5-quart stainless steel mixing bowl with comfortable handle. With 10 speeds, the standmixer will quickly become your kitchen’s culinary center as you mix, knead and whip ingredients with ease. And for even more versatility, the power hub fits optional attachments from food grinders to pasta makers and more.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/81UknzEqmhL._SL1500_.jpg",
        msrp: 429.99,
        upc: 'KSM150PSER',
        amazon_sale_price: 259.99,
        amazon_prod_url: 'https://www.amazon.com/KitchenAid-Quart-Artisan-Stand-Mixer/dp/B00005UP2P/ref=sr_1_3_sspa?s=home-garden&ie=UTF8&qid=1531516536&sr=1-3-spons&keywords=kitchenaid%2Bmixer&th=1',
        macys_sale_price: 259.99,
        macys_prod_url: 'https://www.macys.com/shop/product/kitchenaid-ksm150ps-artisan-5-qt.-stand-mixer?ID=77589&CategoryID=7554&swatchColor=Empire%20Red#fn=sp%3D1%26spc%3D13%26ruleId%3D78%7CREPLACE%20SAVED%20SET%26kws%3Dkitchenaid%20artisan%26searchPass%3DmatchAll%26slotId%3D2',
        wm_sale_price: 259.99,
        wm_prod_url: 'https://www.walmart.com/ip/KitchenAid-Artisan-Series-5-Quart-Tilt-Head-Stand-Mixer-Empire-Red-KSM150PSER/15173448',
        },

        {
        prod_name: 'Cuisinart 2-Slice Compact Plastic Toaster',
        prod_desc: `The classic toaster gets a modern update with the Compact toaster by Cuisinart. It saves space, placed sideways or facing forward, to fit any kitchen counter. Whether making thick bagel halves or thin sliced breads, the wide slots, high-lift carriage and custom controls ensure even, precise and convenient toasting, every time.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61Jyff1m6UL._SL1200_.jpg",
        msrp: 55.00,
        upc: 'KCPT-122',
        amazon_sale_price: 23.99,
        amazon_prod_url: 'https://www.amazon.com/Cuisinart-CPT-122-2-Slice-Compact-Plastic/dp/B009GQ034C/ref=sr_1_3?s=home-garden&ie=UTF8&qid=1531516945&sr=1-3&keywords=cuisinart+toaster+cpt122',
        macys_sale_price: 29.99,
        macys_prod_url: 'https://www.macys.com/shop/product/cuisinart-cpt-122-toaster-2-slice-compact?ID=792739&CategoryID=7554#fn=sp%3D1%26spc%3D9%26ruleId%3D78%26kws%3Dcuisinart%20toaster%26searchPass%3DexactMultiMatch%26slotId%3D3',
        wm_sale_price: 23.99,
        wm_prod_url: 'https://www.walmart.com/ip/Cuisinart-2-Slice-Compact-Plastic-Toaster-White/23502795',
        },

      ]);
    });
};
