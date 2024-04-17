// script to insert shipping zones & each zone's methods, payment methods for checkouts to place 

const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  // insert shipping zones
  await execute(
    connection,
    `INSERT INTO shipping_zone (name, country)
     VALUES ('United States', 'US')`
  );

  // insert shipping methods in total
  await execute(
    connection,
    `INSERT INTO shipping_method (name)
     VALUES ('USPost')`
  );

  // insert shipping methods for each zone
  await execute(
    connection, 
    `INSERT INTO shipping_zone_method (method_id, zone_id, is_enabled, cost)
    VALUES (1, 1, 't', 2)`
  );

  // enable cash on delivery
  await execute(
    connection,
    `UPDATE setting SET value = '1' WHERE name = 'codPaymentStatus'`
  );

}
