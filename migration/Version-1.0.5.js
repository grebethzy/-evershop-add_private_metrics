// script to create checkout table 

const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  await execute(
    connection,
    `CREATE TABLE "privacy_checkouts" (
      checkout_id SERIAL PRIMARY KEY,
      customer_id INT,
      customer_email varchar, 
      cart_id INT,
      totalQty INT, 
      subTotalValue decimal(12, 4), 
      subTotalText varchar,
      subTotalInclTaxValue decimal(12, 4), 
      subTotalInclTaxText varchar,
      taxAmountValue decimal(12, 4),
      taxAmountText varchar,
      discountAmountValue decimal(12, 4),
      discountAmountText varchar,
      coupon varchar, 
      grandTotalValue decimal(12, 4),
      grandTotalText varchar, 
      productnames varchar, 
      productskus varchar, 
      action_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
  )

}