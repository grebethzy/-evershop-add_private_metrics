// sript to create views and clicks table

const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  await execute (
    connection, 
    `
      CREATE TABLE privacy_clicks (
        click_id SERIAL PRIMARY KEY,
        customer_id INT,
        customer_email varchar, 
        product_id INT, 
        url_key varchar NOT NULL,
        action_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `
  ); 

  await execute (
    connection, 
    `
      CREATE TABLE privacy_views (
        view_id SERIAL PRIMARY KEY,
        customer_id INT,
        customer_email varchar, 
        product_id INT, 
        url_key varchar NOT NULL,
        action_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `
  )
}

