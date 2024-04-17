// sript to add multiple products at the initial start 

const { execute, insert } = require('@evershop/postgres-query-builder');

// eslint-disable-next-line no-multi-assign
module.exports = exports = async (connection) => {
  // Create a function to add event to the event table after a order is created
  await execute(
    connection,
    `CREATE OR REPLACE FUNCTION add_product_inventory_updated_event() RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO event (name, data)
      VALUES ('inventory_updated', json_build_object('old', row_to_json(OLD), 'new', row_to_json(NEW)));
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;`
  );

  // import kids products for 6 listings
  const kidProduct0 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'KID-0000',
      price: 20,
      weight: 100,
      status: true,
      variant_group_id: null,
      category_id: 1
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: kidProduct0.insertId,
      qty: 100,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: kidProduct0.insertId,
      name: 'GAP New Off White Kids Value Graphic T-Shirt',
      url_key: 'KID-0000',
      meta_title: 'GAP New Off White Kids Value Graphic T-Shirt',
      meta_description: 'GAP New Off White Kids Value Graphic T-Shirt',
      meta_keywords: 'GAP New Off White Kids Value Graphic T-Shirt',
      description:
        '- Casual tee with arch logo and tropical print, - Regular fit, - Short sleeves, - Slip-on style, - Cotton'        
    })
    .execute(connection);

  const kidProduct1 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'KID-0001',
      price: 50,
      weight: 120,
      status: true,
      variant_group_id: null,
      category_id: 1
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: kidProduct1.insertId,
      qty: 120,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: kidProduct1.insertId,
      name: 'Young Athletes Sandals',
      url_key: 'KID-0001',
      meta_title: 'Young Athletes Sandals',
      meta_description: 'Young Athletes Sandals',
      meta_keywords: 'Young Athletes Sandals',
      description:
        'Total toe coverage perforated strappy sandals. Water-resistant textile upper flexes with their foot. Synthetic insole. Rubber outsole. Foam cushioning for all-day comfort. Round toe. Crafted from premium genuine leather, these loafers offer both style and comfort. The traditional design features a sleek and simple silhouette that pairs effortlessly with both formal and casual attire. The cushioned insole provides all-day support, making these loafers a versatile addition to your footwear collection.'
    })
    .execute(connection);

  const kidProduct2 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'KID-0002',
      price: 120,
      weight: 120,
      status: true,
      variant_group_id: null,
      category_id: 1
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: kidProduct2.insertId,
      qty: 90,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: kidProduct2.insertId,
      name: 'Guess True White A000 Kids Core Short Sleeve T-Shirt',
      url_key: 'KID-0002',
      meta_title: 'Guess True White A000 Kids Core Short Sleeve T-Shirt',
      meta_description: 'Guess True White A000 Kids Core Short Sleeve T-Shirt',
      meta_keywords: 'Guess True White A000 Kids Core Short Sleeve T-Shirt',
      description:
        'Metallic brand logo graphic tee. Round neckline. Regular fit. Short sleeves'
    })
    .execute(connection);

  const kidProduct3 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'KID-0003',
      price: 102,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 1
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: kidProduct3.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: kidProduct3.insertId,
      name: 'Under Armour White/White/White Kids BGS Assert 10 UFM SYN',
      url_key: 'KID-0003',
      meta_title: 'Under Armour White/White/White Kids BGS Assert 10 UFM SYN',
      meta_description: 'Under Armour White/White/White Kids BGS Assert 10 UFM SYN',
      meta_keywords: 'Under Armour White/White/White Kids BGS Assert 10 UFM SYN',
      description:
        'Best for running. Contrasting UA logo detailed mesh shoes. Synthetic upper. Textile insole. Rubber outsole'
    })
    .execute(connection);

  const kidProduct4 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'KID-0004',
      price: 50,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 1
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: kidProduct4.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: kidProduct4.insertId,
      name: 'Birkenstock Active Red Kids Rio Kids EVA',
      url_key: 'KID-0004',
      meta_title: 'Birkenstock Active Red Kids Rio Kids EVA',
      meta_description: 'Birkenstock Active Red Kids Rio Kids EVA',
      meta_keywords: 'Birkenstock Active Red Kids Rio Kids EVA',
      description:
        "Solid tone ankle strap sandals. EVA upper. EVA insole. EVA outsole. Buckle fastening. Narrow fit"
    })
    .execute(connection);

  const kidProduct5 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'KID-0005',
      price: 24,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 1
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: kidProduct5.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: kidProduct5.insertId,
      name: 'Dri-FIT Challenger Training Shorts',
      url_key: 'KID-0005',
      meta_title: 'Dri-FIT Challenger Training Shorts',
      meta_description: 'Dri-FIT Challenger Training Shorts',
      meta_keywords: 'Dri-FIT Challenger Training Shorts',
      description:
        "Nike Dri-FIT Challenger Big Kids' (Boys') Training Shorts An essential for running laps, chasing down tennis balls, playing soccer or just good old fashioned playing during recess, these cool, comfortable shorts help you do it all and have fun, no sweat. What makes these extra special? You can keep your phone or media player in the back drop-in pocket! Now you're ready to rock. Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable. Stash your snacks in the mesh side pockets. Tighten up the waist on the go with the quick-tie drawcord. Mesh side panel and hem slit help you stay cool and carefree."
    })
    .execute(connection);

  // imports 5 listings for male

  const menProduct0 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'MEN-0000',
      price: 35,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 3
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: menProduct0.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: menProduct0.insertId,
      name: 'GAP Tapestry Navy Men Initial New Arch Tee',
      url_key: 'MEN-0000',
      meta_title: 'GAP Tapestry Navy Men Initial New Arch Tee',
      meta_description: 'GAP Tapestry Navy Men Initial New Arch Tee',
      meta_keywords: 'GAP Tapestry Navy Men Initial New Arch Tee',
      description:
        "Casual tee with arch logo embroidery. Round neckline. Regular fit. Short sleeves"
    })
    .execute(connection);

    const menProduct1 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'MEN-0001',
      price: 90,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 3
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: menProduct1.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: menProduct1.insertId,
      name: 'Birkenstock Black Men Arizona EVA', 
      url_key: 'MEN-0001',
      meta_title: 'Birkenstock Black Men Arizona EVA', 
      meta_description: 'Birkenstock Black Men Arizona EVA', 
      meta_keywords: 'Birkenstock Black Men Arizona EVA', 
      description:
        "Solid coloured sandals with buckle details. EVA upper. EVA insole. EVA outsole" 
    })
    .execute(connection);

  const menProduct2 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'MEN-0002',
      price: 30,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 3
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: menProduct2.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: menProduct2.insertId,
      name: 'Nike Black/White/Dark Smoke Grey/Pure Platinum Men Downshifter 12 Men\'s Road Running Shoes', 
      url_key: 'MEN-0002',
      meta_title: 'Nike Black/White/Dark Smoke Grey/Pure Platinum Men Downshifter 12 Men\'s Road Running Shoes', 
      meta_description: 'Nike Black/White/Dark Smoke Grey/Pure Platinum Men Downshifter 12 Men\'s Road Running Shoes', 
      meta_keywords: 'Nike Black/White/Dark Smoke Grey/Pure Platinum Men Downshifter 12 Men\'s Road Running Shoes', 
      description:
        "Nike Downshifter 12 Men's Road Running Shoe YOUR RUN BEGINS WITH STABLE SUPPORT. Take those first steps on you running journey in the Nike Downshifter 12. It's got a supportive fit and a stable ride, with a lightweight feel that easily transitions from your workout to hanging out. This one continues our sustainability journey with a design made from at least 20% recycled content by weight. Your trek begins. Lace up and hit the road. Cool, Light, Fast Mesh throughout the upper has a lightweight, breathable feel. The mesh was placed in key zones at the forefoot based on runner feedback, providing you with cooling where it counts. Lace Up, Support Up Feel the stability with the midfoot fitband. It works with your laces, keeping your foot more secure the tighter your laces are. Run Hard With a Soft Feel Super-soft foam through the midsole helps cushion your foot with every step. The increased height means a softer sensation as you run. The rubber outsole has the traction to keep your feet gripped to the pavement. Skins at the toes and eyelets offer durability. A mesh material shows off the internal components at the midfoot and toe."
    })
    .execute(connection);

  const menProduct3 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'MEN-0003',
      price: 25,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 3
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: menProduct3.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: menProduct3.insertId,
      name: 'Under Armour Black/Graphite Men UA Tech Short Sleeve Tee', 
      url_key: 'MEN-0003',
      meta_title: 'Under Armour Black/Graphite Men UA Tech Short Sleeve Tee', 
      meta_description: 'Under Armour Black/Graphite Men UA Tech Short Sleeve Tee', 
      meta_keywords: 'Under Armour Black/Graphite Men UA Tech Short Sleeve Tee', 
      description:
        "Solid coloured training tee with logo print. HeatGear fabric wicks sweat from skin, keeping you cool and dry. Round neckline" 
    })
    .execute(connection);

  const menProduct4 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'MEN-0004',
      price: 15,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 3
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: menProduct4.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: menProduct4.insertId,
      name: 'ADIDAS White/Medium Grey Heather/Black Women trefoil liner socks 6 pairs', 
      url_key: 'MEN-0004',
      meta_title: 'ADIDAS White/Medium Grey Heather/Black Women trefoil liner socks 6 pairs', 
      meta_description: 'ADIDAS White/Medium Grey Heather/Black Women trefoil liner socks 6 pairs', 
      meta_keywords: 'ADIDAS White/Medium Grey Heather/Black Women trefoil liner socks 6 pairs', 
      description:
        "The adidas Trefoil Liner Socks let you keep comfort between you and yourself. Some looks just call for the no-show length, and you don't have to worry about them slipping off your feet. Plus every time you take off your kicks you will see the Trefoil has been with you the whole time." 
    })
    .execute(connection);

  // insert 20 women products
  
  const womenProduct0 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0000',
      price: 35,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct0.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct0.insertId,
      name: 'H&M Black Dark Women Button-front trousers', 
      url_key: 'WOMEN-0000',
      meta_title: 'H&M Black Dark Women Button-front trousers', 
      meta_description: 'H&M Black Dark Women Button-front trousers', 
      meta_keywords: 'H&M Black Dark Women Button-front trousers', 
      description:
        "Trousers in heavy jersey. High waist with concealed elastication, decorative buttons at the front and wide, straight legs." 
    })
    .execute(connection);

    const womenProduct1 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0001',
      price: 33,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct1.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct1.insertId,
      name: 'H&M Black Dark Women Linen-blend cropped blouse',
      url_key: 'WOMEN-0001',
      meta_title: 'H&M Black Dark Women Linen-blend cropped blouse',
      meta_description: 'H&M Black Dark Women Linen-blend cropped blouse',
      meta_keywords: 'H&M Black Dark Women Linen-blend cropped blouse',
      description:
        "Cropped blouse in woven fabric made from a linen and viscose blend. Sweetheart neckline and wide shoulder straps with frills that continue down the front and back. Gathers at the front and smocking at the back."
    })
    .execute(connection);

    const womenProduct2 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0002',
      price: 55,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct2.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct2.insertId,
      name: 'H&M Green Medium Dusty Women Balloon-sleeved satin dress', 
      url_key: 'WOMEN-0002',
      meta_title: 'H&M Green Medium Dusty Women Balloon-sleeved satin dress', 
      meta_description: 'H&M Green Medium Dusty Women Balloon-sleeved satin dress', 
      meta_keywords: 'H&M Green Medium Dusty Women Balloon-sleeved satin dress', 
      description:
        "Short dress in softly draping satin with a deep V-neckline and a gathered seam under the bust. Long balloon sleeves and narrow cuffs with a covered button. Concealed zip at one side. Partly lined."
    })
    .execute(connection);

  const womenProduct3 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0003',
      price: 54,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct3.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct3.insertId,
      name: 'H&M Brown Dark Women Court shoes', 
      url_key: 'WOMEN-0003',
      meta_title: 'H&M Brown Dark Women Court shoes', 
      meta_description: 'H&M Brown Dark Women Court shoes', 
      meta_keywords: 'H&M Brown Dark Women Court shoes', 
      description:
        "Court shoes with pointed toes and covered heels. Satin linings." 
    })
    .execute(connection);

  const womenProduct4 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0004',
      price: 49,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct4.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct4.insertId,
      name: 'H&M Pink Dark Women Linen-blend dress', 
      url_key: 'WOMEN-0004',
      meta_title: 'H&M Pink Dark Women Linen-blend dress', 
      meta_description: 'H&M Pink Dark Women Linen-blend dress', 
      meta_keywords: 'H&M Pink Dark Women Linen-blend dress', 
      description:
        "Short dress in a cotton and linen weave with a small band collar and a V-shaped opening at the front. Buttons at the top and a narrow drawstring at the waist. Long balloon sleeves with narrow elastication at the cuffs. Gently flared skirt. Unlined."
    })
    .execute(connection);

  const womenProduct5 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0005',
      price: 25,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct5.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct5.insertId,
      name: 'H&M Mole Dusty Light Women Wide joggers', 
      url_key: 'WOMEN-0005',
      meta_title: 'H&M Mole Dusty Light Women Wide joggers', 
      meta_description: 'H&M Mole Dusty Light Women Wide joggers', 
      meta_keywords: 'H&M Mole Dusty Light Women Wide joggers', 
      description:
        "Loose-fit joggers in sweatshirt fabric with an elasticated, drawstring waist, discreet pockets in the side seams and wide legs."
    })
    .execute(connection);

  const womenProduct6 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0006',
      price: 40,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct6.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct6.insertId,
      name: 'H&M White Dusty Light Women Tie-belt shirt dress', 
      url_key: 'WOMEN-0006',
      meta_title: 'H&M White Dusty Light Women Tie-belt shirt dress', 
      meta_description: 'H&M White Dusty Light Women Tie-belt shirt dress', 
      meta_keywords: 'H&M White Dusty Light Women Tie-belt shirt dress', 
      description:
        "Short dress in woven fabric with a collar and buttons down the front. Dropped shoulders, long sleeves and cuffs with a slit and button. Covered elastication at the back of the waist and a detachable tie belt. Gently flared skirt. Unlined."
    })
    .execute(connection);

  const womenProduct7 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0007',
      price: 75,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 3
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct7.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct7.insertId,
      name: 'H&M Red Medium Women Gathered-bodice dress', 
      url_key: 'WOMEN-0007',
      meta_title: 'H&M Red Medium Women Gathered-bodice dress', 
      meta_description: 'H&M Red Medium Women Gathered-bodice dress', 
      meta_keywords: 'H&M Red Medium Women Gathered-bodice dress', 
      description:
        "Calf-length dress in woven fabric made from a viscose blend. Fitted bodice with gathers, adjustable spaghetti shoulder straps, a deep V-neckline, shaped cups and wide smocking at the back. Flared skirt. Partly lined."
    })
    .execute(connection);

  const womenProduct8 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0008',
      price: 35,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct8.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct8.insertId,
      name: 'H&M White Dusty Light Women Textured jersey dress', 
      url_key: 'WOMEN-0008',
      meta_title: 'H&M White Dusty Light Women Textured jersey dress', 
      meta_description: 'H&M White Dusty Light Women Textured jersey dress', 
      meta_keywords: 'H&M White Dusty Light Women Textured jersey dress', 
      description:
        "Calf-length, fitted dress in textured jersey with a round neckline, butterfly sleeves and a straight-cut hem with a slit at one side."
    })
    .execute(connection);

  const womenProduct9 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0009',
      price: 25,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct9.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct9.insertId,
      name: 'H&M Blue Medium Dusty Women Sarong', 
      url_key: 'WOMEN-0009',
      meta_title: 'H&M Blue Medium Dusty Women Sarong', 
      meta_description: 'H&M Blue Medium Dusty Women Sarong', 
      meta_keywords: 'H&M Blue Medium Dusty Women Sarong', 
      description:
        "Sarong in an airy weave that can be tied at the front and worn as a skirt."
    })
    .execute(connection);

  const womenProduct10 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0010',
      price: 25,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct10.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct10.insertId,
      name: 'H&M Red Medium Women Balloon-sleeved dress', 
      url_key: 'WOMEN-0010',
      meta_title: 'H&M Red Medium Women Balloon-sleeved dress', 
      meta_description: 'H&M Red Medium Women Balloon-sleeved dress', 
      meta_keywords: 'H&M Red Medium Women Balloon-sleeved dress', 
      description:
        "Short dress in woven fabric with a slight sheen. Wide, round neckline with gathers, elbow-length balloon sleeves with narrow elastication at the cuffs, covered elastication at the waist and a gently flared skirt. Unlined."
    })
    .execute(connection);

  const womenProduct11 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0011',
      price: 8,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct11.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct11.insertId,
      name: 'H&M Green Medium Women Cotton T-shirt', 
      url_key: 'WOMEN-0011',
      meta_title: 'H&M Green Medium Women Cotton T-shirt', 
      meta_description: 'H&M Green Medium Women Cotton T-shirt', 
      meta_keywords: 'H&M Green Medium Women Cotton T-shirt', 
      description:
        "T-shirt in soft cotton jersey with a round neckline."
    })
    .execute(connection);

  const womenProduct12 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0012',
      price: 11,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct12.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct12.insertId,
      name: 'H&M White Light Women Printed T-shirt', 
      url_key: 'WOMEN-0012',
      meta_title: 'H&M White Light Women Printed T-shirt', 
      meta_description: 'H&M White Light Women Printed T-shirt', 
      meta_keywords: 'H&M White Light Women Printed T-shirt', 
      description:
        "Short, fitted T-shirt in soft cotton jersey with a print motif on the front and a ribbed trim around the neckline."
    })
    .execute(connection);

  const womenProduct13 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0013',
      price: 35,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct13.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct13.insertId,
      name: 'H&M Black Dark Women High-waisted tailored trousers', 
      url_key: 'WOMEN-0013',
      meta_title: 'H&M Black Dark Women High-waisted tailored trousers', 
      meta_description: 'H&M Black Dark Women High-waisted tailored trousers', 
      meta_keywords: 'H&M Black Dark Women High-waisted tailored trousers', 
      description:
        "Tailored trousers in jersey with a high, elasticated waist. Relaxed fit with diagonal side pockets and wide legs with pleats at the top and creases down the front."
    })
    .execute(connection);

  const womenProduct14 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0014',
      price: 7,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct14.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct14.insertId,
      name: 'H&M Yellow Dusty Light Women Cotton T-shirt', 
      url_key: 'WOMEN-0014',
      meta_title: 'H&M Yellow Dusty Light Women Cotton T-shirt', 
      meta_description: 'H&M Yellow Dusty Light Women Cotton T-shirt', 
      meta_keywords: 'H&M Yellow Dusty Light Women Cotton T-shirt', 
      description:
        "T-shirt in soft cotton jersey with a round neckline."
    })
    .execute(connection);

  const womenProduct15 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0015',
      price: 74,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct15.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct15.insertId,
      name: 'H&M Black Dark Women Sequined dress', 
      url_key: 'WOMEN-0015',
      meta_title: 'H&M Black Dark Women Sequined dress', 
      meta_description: 'H&M Black Dark Women Sequined dress', 
      meta_keywords: 'H&M Black Dark Women Sequined dress', 
      description:
        "Short dress in sequined jersey with a round neckline and long, flared raglan sleeves. Concealed zip and hook-and-eye fastener at the back. Jersey lining.        "
    })
    .execute(connection);

  const womenProduct16 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0016',
      price: 11,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct16.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct16.insertId,
      name: 'H&M White Light Women Square-neck dress', 
      url_key: 'WOMEN-0016',
      meta_title: 'H&M White Light Women Square-neck dress', 
      meta_description: 'H&M White Light Women Square-neck dress', 
      meta_keywords: 'H&M White Light Women Square-neck dress', 
      description:
        "Knee-length, loose-fit dress in woven fabric featuring a square neckline with gathers and short sleeves. Unlined."
    })
    .execute(connection);

  const womenProduct17 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0017',
      price: 35,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct17.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct17.insertId,
      name: 'H&M Grey Medium Dusty Women Tailored trousers', 
      url_key: 'WOMEN-0017',
      meta_title: 'H&M Grey Medium Dusty Women Tailored trousers', 
      meta_description: 'H&M Grey Medium Dusty Women Tailored trousers', 
      meta_keywords: 'H&M Grey Medium Dusty Women Tailored trousers', 
      description:
        "Loose-fit tailored trousers in twill with pleats at the top, a zip fly and an extended waistband with a concealed hook-and-eye fastener. Diagonal side pockets, fake welt pockets at the back and wide, straight legs with creases."
    })
    .execute(connection);

  const womenProduct18 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0018',
      price: 35,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct18.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct18.insertId,
      name: 'H&M Black Dark Women Pleated skirt', 
      url_key: 'WOMEN-0018',
      meta_title: 'H&M Black Dark Women Pleated skirt', 
      meta_description: 'H&M Black Dark Women Pleated skirt', 
      meta_keywords: 'H&M Black Dark Women Pleated skirt', 
      description:
        "Knee-length skirt in pleated jersey with a high, elasticated waist."
    })
    .execute(connection);

  const womenProduct19 = await insert('product')
    .given({
      type: 'simple',
      visibility: 1,
      group_id: 1,
      sku: 'WOMEN-0019',
      price: 8,
      weight: 90,
      status: true,
      variant_group_id: null,
      category_id: 2
    })
    .execute(connection);

  await insert('product_inventory')
    .given({
      product_inventory_product_id: womenProduct19.insertId,
      qty: 150,
      manage_stock: true,
      stock_availability: true
    })
    .execute(connection);

  await insert('product_description')
    .given({
      product_description_product_id: womenProduct19.insertId,
      name: 'H&M Blue Medium Women Cotton T-shirt', 
      url_key: 'WOMEN-0019',
      meta_title: 'H&M Blue Medium Women Cotton T-shirt', 
      meta_description: 'H&M Blue Medium Women Cotton T-shirt', 
      meta_keywords: 'H&M Blue Medium Women Cotton T-shirt', 
      description:
        "T-shirt in soft cotton jersey with a round neckline."
    })
    .execute(connection);

};
