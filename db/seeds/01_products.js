
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

        {
        prod_name: 'Vitamix Ascent Mixer',
        prod_desc: `Vitamix fuels passions. It’s why we’re the brand most trusted by professional chefs. But you won’t just find us in restaurant kitchens. You’ll also find us in home kitchens around the world. Because whether you’re interested in the culinary arts, making healthier choices, or enjoying restaurant-quality smoothies at home—when you’re ready to move on and move up, when you’re ready to invest in your passion, you’re ready for Vitamix.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61gJPwOAkDL._SL1500_.jpg",
        msrp: 549.95,
        upc: 'ADIB01N4HPJV3',
        amazon_sale_price: 395.00,
        amazon_prod_url: 'https://www.amazon.com/Vitamix-Blender-Wireless-Connectivity-Professional-Grade/dp/B01N4HPJV3/ref=sr_1_1_sspa?s=home-garden&ie=UTF8&qid=1531519726&sr=1-1-spons&keywords=Vitamix%2BA2300%2BAscent%2BSeries%2BBlender&th=1',
        macys_sale_price: 449.99,
        macys_prod_url: 'https://www.macys.com/shop/registry/wedding/product/vitamix-a2300-ascent-series-blender?ID=4339705&CategoryID=70451&swatchColor=White#fn=sp%3D1%26spc%3D10%26ruleId%3D78%7CBOOST%20SAVED%20SET%26searchPass%3DmatchNone%26slotId%3D3',
        wm_sale_price: 435.00,
        wm_prod_url: 'https://www.walmart.com/ip/Vitamix-Ascent-Variable-Speed-Blender-Black-A2300/518043911',
        },

        {
        prod_name: 'Oxo 10 Piece Food Container Set',
        prod_desc: `OXO Good Grips POP Containers are airtight, stackable and space-efficient, making it easy to keep your dry foods fresh and your kitchen organized. For a true airtight seal just push the button, it also pops up to serve handle for the lid. Designed for modular stacking, POP Containers’ square and rectangular shapes make the most out of any storage space, no matter how tight.

        POP Containers are available in 11 different sizes: each one is perfectly calibrated to fit common household staples including 5 lb bags of flour and sugar, 1 lb bags of coffee, boxes of cereal, oatmeal, coffee, rice, pasta, spices and more. With curved corners for easy pouring, sturdy, BPA-free construction, and a that lid pops apart (and snaps back together) for thorough cleaning. POP containers aren’t just for your kitchen: use them any place you want more organization! Think playrooms, bathrooms, garage, craft rooms – the possibilities are endless.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/91ePUMnNrHL._SL1500_.jpg",
        msrp: 99.99,
        upc: '1165700',
        amazon_sale_price: 89.99,
        amazon_prod_url: 'https://www.amazon.com/OXO-10-Piece-Airtight-Storage-Container/dp/B0029096ZO/ref=sr_1_1_sspa?s=home-garden&ie=UTF8&qid=1531517112&sr=1-1-spons&keywords=OXO+10-Piece+Pop+Container+Set&psc=1',
        macys_sale_price: 99.99,
        macys_prod_url: 'https://www.macys.com/shop/product/oxo-10-piece-pop-container-set?ID=397139&CategoryID=31839#fn=sp%3D1%26spc%3D17%26ruleId%3D78%26kws%3Doxo%20food%20storage%20containers%26ackws%3Doxo%20s%26searchType%3Dac%26searchPass%3DexactMultiMatch%26slotId%3D1',
        wm_sale_price: 99.98,
        wm_prod_url: 'https://www.walmart.com/ip/OXO-10-Piece-Good-Grips-POP-Container-Set-White/53976211',
        },

        {
        prod_name: 'Corningware 1.5 qt Baker Cornflower',
        prod_desc: `60th Anniversary Cornflower 1-1/2-qt Oblong Casserole A retro look, with CorningWare's iconic Cornflower motif Durable stoneware material Dishwasher, refrigerator, freezer & microwave safe Pre-heated oven safe Non-porous surface does not absorb food odors, flavors or stains Outer Dimension: 10 1/2" x 6 3/4" x 2 1/2" One look at this CorningWare® baker, with its familiar Cornflower motif, and you know it's a baking dish you can count on. CorningWare is recognized for quality and convenience, and this baker is no exception. You can use it in the microwave or in a preheated oven. Because CorningWare® products are so durable, it's likely you'll hand down this baking dish so that the next generations can create recipes — and memories — of their own.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/51zbs5IYrWL._SL1500_.jpg",
        msrp: 24.99,
        upc: '1165700',
        amazon_sale_price: 22.99,
        amazon_prod_url: 'https://www.amazon.com/CorningWare-Anniversary-1-5-qt-Casserole-Vintage/dp/B07CBPL9JP/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1531517354&sr=1-1&keywords=Corningware+Cornflower+1.5-Qt+Baker',
        macys_sale_price: 14.99,
        macys_prod_url: 'https://www.macys.com/shop/product/corningware-cornflower-1.5-qt-baker?ID=5087230&CategoryID=31795#fn=sp%3D1%26spc%3D12%26ruleId%3D78%26kws%3Dcorningware%2012-piece%26searchPass%3DpartialMatch%26slotId%3D12',
        wm_sale_price: 12.97,
        wm_prod_url: 'https://www.walmart.com/ip/Corningware-Cornflower-1-5qt-Baker/866002871',
        },

        {
        prod_name: 'Pyrex 2-cup Measuring Cup',
        prod_desc: `Add a measure of consistency to your kitchen with the Pyrex 2-Cup Measuring Cup that is sturdy and easy-to-read. Measurement indicators and the easy to grab handle are designed to make it easy to mix, measure and pour. Whether you are preparing a multi-course meal or simply a snack for one, Pyrex offers products which make food preparation a little easier, from beginning to end. There's no substitute for Pyrex, the original glass bakeware. Introduced 90 years ago and made of a durable, high temperature material, Pyrex remains the ideal medium for safe, dependable food preparation. Use and care: Avoid sudden temperature changes. No stovetop or broiler use. Do not overheat oil or butter. Microwave and dishwasher safe.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/51f8YFnrbOL.jpg",
        msrp: 18.99,
        upc: '1165700',
        amazon_sale_price: 13.86,
        amazon_prod_url: 'https://www.amazon.com/Pyrex-Prepware-2-Cup-Glass-Measuring/dp/B0002ITQHS/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1531517587&sr=1-1&keywords=Pyrex+2+Cup+Measuring+Cup',
        macys_sale_price: 6.99,
        macys_prod_url: 'https://www.macys.com/shop/product/pyrex-2-cup-measuring-cup?ID=333153&CategoryID=31795#fn=sp%3D1%26spc%3D3%26ruleId%3D78%26kws%3Dpyrex%20measuring%20cups%26ackws%3Dpyrex%20measuring%26searchType%3Dac%26searchPass%3DallMultiMatchWithSpelling%26slotId%3D2',
        wm_sale_price: 18.79,
        wm_prod_url: 'https://www.walmart.com/ip/Prepware-2-Cup-Glass-Measuring-Cup-Includes-1-2-Cup-Measuring-Cup-with-Red-Graphics-By-Pyrex/729508590',
        },

        {
        prod_name: 'Lenox Tuscany Highball Glass set',
        prod_desc: `Crystal clarity is at its best in the Tuscany Classics highball glass. Crafted of non-lead crystal and dishwasher safe, the straight lines and strong contemporary design give this 16 oz. glass grace and style. The set of four makes a wonderful gift.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71Hp91duyIL._SL1500_.jpg",
        msrp: 54.00,
        upc: '1165700',
        amazon_sale_price: 35.99,
        amazon_prod_url: 'https://www.amazon.com/Lenox-Tuscany-Classics-Cylinder-Highball/dp/B00NVFIAIU/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1531517910&sr=1-1&keywords=Tuscany+Classics+Highball+Glasses%2C+Set+of+4',
        macys_sale_price: 39.99,
        macys_prod_url: 'https://www.macys.com/shop/product/lenox-tuscany-classics-highball-glasses-set-of-4?ID=1619901&CategoryID=65938#fn=sp%3D1%26spc%3D1%26ruleId%3D78%26kws%3Dlenox%20tuscany%20classics%20highball%26searchPass%3DallMultiMatchWithSpelling%26slotId%3D1',
        wm_sale_price: 34.79,
        wm_prod_url: 'https://www.walmart.com/ip/Lenox-Tuscany-Cylinder-Hiball-Glass-S-4/370980752',
        },

        {
        prod_name: 'Cusinart Fondu Set',
        prod_desc: `The fun of fondue gets a sleek and convenient makeover with the Cuisinart Electric Fondue Pot. Designed for use with oil, broth, chocolate, or cheese, the set combines powerful electric heat with easy temperature control and handsome but tidy construction. The 3-quart stainless-steel bowl is lined with nonstick coating for keeping heated foods from sticking, and the stand, bowl, ring, and temperature probe all assemble and disassemble easily. A combination of finishes—brushed on the bowl and ring, mirror on the stand and handles—gives the unit a contemporary flair.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61SJlbNXhKL._SL1000_.jpg",
        msrp: 110.00,
        upc: '1165700',
        amazon_sale_price: 49.96,
        amazon_prod_url: 'https://www.amazon.com/Cuisinart-CFO-3SS-Electric-Fondue-Maker/dp/B00018RR48/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1531519267&sr=1-1&keywords=Cuisinart+CFO-3SS+3-Quart+Electric+Fondue+Pot%2C+Stainless+Steel',
        macys_sale_price: 59.99,
        macys_prod_url: 'https://www.macys.com/shop/product/cuisinart-cfo-3ss-electric-fondue-set?ID=111761&CategoryID=7554#fn=sp%3D1%26spc%3D1%26ruleId%3D78%26kws%3Dfondu%20set%26searchPass%3DallMultiMatchWithSpelling%26slotId%3D1',
        wm_sale_price: 58.99,
        wm_prod_url: 'https://www.walmart.com/ip/Cuisinart-CFO-3SS-3-Quart-Electric-Fondue-Pot-Stainless-Steel/22579081',
        },

        {
        prod_name: 'Cuisinart Classic Stainless Steel 15-Pc. Cutlery Set',
        prod_desc: `Introducing the Cuisinart Classic Stainless Steel Cutlery 15-piece Block Set. This set includes an 8" Chef Knife, 8" Slicing Knife, 7" Santoku Knife, 5.5" Serrated Utility Knife, 3.5" Paring Knife, 3.5" Bird's Beak Paring Knife, 8" Sharpening Steel, All-Purpose Household Shears and Block to hold them all.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71OoifMpDUL._SL1500_.jpg",
        msrp: 134.99,
        upc: '1165700',
        amazon_sale_price: 42.95,
        amazon_prod_url: 'https://www.amazon.com/Cuisinart-C77SS-15PK-15-Piece-Stainless-Hollow/dp/B00GIBKC3K/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1531519473&sr=1-1&keywords=Cuisinart+Classic+Stainless+Steel+15-Pc.+Cutlery+Set',
        macys_sale_price: 79.99,
        macys_prod_url: 'https://www.macys.com/shop/product/cuisinart-classic-stainless-steel-15-pc.-cutlery-set?ID=2654029&CategoryID=31760#fn=BRAND%3DCuisinart%26SIZE%3D%26sp%3D1%26spc%3D136%26ruleId%3D78%7CBOOST%20SAVED%20SET%26kws%3Dknife%20set%26searchPass%3DexactMultiMatch%26slotId%3D1',
        wm_sale_price: 47.99,
        wm_prod_url: 'https://www.walmart.com/ip/Cuisinart-15pc-Stainless-Steel-Hollow-Handle-Cutlery-Block-Set/35909076',
        },

        {
        prod_name: 'Dyson Ball Multi Floor 2 Vacuum',
        prod_desc: `The Dyson Ball Multi Floor 2 has unrivaled Dyson Suction*, and is light to maneuver. A slimmer design allows the Multi Floor 2 to turn on a dime, steering easily into difficult spaces. It's ideal for homes with hardwood, tile, and carpets. The Multi Floor 2 has an advanced self-adjusting cleaner head that automatically adjusts between all floor types - sealing in suction for a powerful clean across your entire home. Its wand and hose release in one smooth action to make it easier to clean up high and under furniture. With hygienic bin emptying, there's no need to get your hands dirty - just push the button to release the dirt. Whole-machine HEPA filtration ensures that allergens and bacteria are trapped inside the machine, not expelled back into the home. Dyson free 5 year warranty covers parts and labor, plus free shipping there and back. *Suction tested to ASTM F558 at the cleaner head, dust-loaded against upright market.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/714NPNRp2eL._SL1500_.jpg",
        msrp: 399.99,
        upc: '1165700',
        amazon_sale_price: 299.99,
        amazon_prod_url: 'https://www.amazon.com/Dyson-Multi-Floor-Upright-Vacuum/dp/B01NAGRRRU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1531518171&sr=1-4&keywords=Dyson+Ball+Multi+Floor+2+Vacuum',
        macys_sale_price: 399.99,
        macys_prod_url: 'https://www.macys.com/shop/product/dyson-ball-multifloor-2-upright-vacuum?ID=4559276&CategoryID=23481#fn=BRAND%3DDyson%26SIZE%3D%26sp%3D1%26spc%3D75%26ruleId%3D78%7CBOOST%20ATTRIBUTE%7CBOOST%20SAVED%20SET%26kws%3Dvacuum%26searchPass%3DmatchNone%26slotId%3D6',
        wm_sale_price: 399.99,
        wm_prod_url: 'https://www.walmart.com/ip/Dyson-Ball-Multi-Floor-2-Vacuum/55410080',
        },

        {
        prod_name: 'Shark GI468 Lightweight Professional Iron',
        prod_desc: `Take smooth to a whole new level with the most powerful steam iron around. Vertically or horizontally, the professional stainless steel soleplate glides effortlessly over virtually any fabric, while intelligent electronic controls maintain and inform you of actual and selected temperatures. One-year warranty. Model GI468.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/41vxsz8KtRL.jpg",
        msrp: 44.99,
        upc: '1165700',
        amazon_sale_price: 40.95,
        amazon_prod_url: 'https://www.amazon.com/Shark-Lightweight-Professional-Anticalcium-longevity/dp/B01HNC9ZT4/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1531518278&sr=1-6&keywords=GI468+Professional+Lightweight+Iron',
        macys_sale_price: 44.99,
        macys_prod_url: 'https://www.macys.com/shop/product/shark-gi468-professional-lightweight-iron?ID=279614&CategoryID=23487#fn=BRAND%3DShark%26SIZE%3D%26sp%3D1%26spc%3D84%26ruleId%3D78%26kws%3Diron%26searchPass%3DexactMultiMatch%26slotId%3D1',
        wm_sale_price: 29.96,
        wm_prod_url: 'https://www.walmart.com/ip/Shark-nbsp-Lightweight-Professional-Electronic-Iron/11396544',
        },

        {
        prod_name: 'American Tourister Luggage set',
        prod_desc: `Perfect for a variety of travel needs, this POP Plus 3-piece spinner upright set by American Tourister features multi-directional wheels for easy maneuverability, ergonomic design, and expanding capabilities for extra versatility.` ,
        img_url: "https://images-na.ssl-images-amazon.com/images/I/91ISe0hQOjL._SL1500_.jpg",
        msrp: 400.00,
        upc: '1165700',
        amazon_sale_price: 129.99,
        amazon_prod_url: 'https://www.amazon.com/American-Tourister-Piece-Nested-Black/dp/B0115Q9S8C/ref=sr_1_1?s=apparel&ie=UTF8&qid=1531518472&sr=1-1&nodeID=7141123011&psd=1&keywords=American+Tourister+POP+Plus+3+Piece+Spinner+Luggage+Set',
        macys_sale_price: 199.99,
        macys_prod_url: 'https://www.walmart.com/ip/American-Tourister-POP-Plus-3-Piece-Spinner-Luggage-Set/46285720',
        wm_sale_price: 129.99,
        wm_prod_url: 'https://www.walmart.com/ip/American-Tourister-POP-Plus-3-Piece-Spinner-Luggage-Set/46285720',
        },

      ]);
    });
};
