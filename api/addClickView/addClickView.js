const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { insert } = require('@evershop/postgres-query-builder');

module.exports = async function graphql(request, response, delegate, next) {
  try {
    const { body } = request;
    const { customer_id, customer_email, product_id, url_key, isView } = body;

    if (isView) {
      await insert('privacy_views') 
        .given({
          customer_id,
          customer_email, 
          product_id, 
          url_key
        })
        .execute(pool);
    } else {
      await insert('privacy_clicks')
      .given({
        customer_id,
        customer_email, 
        product_id, 
        url_key
      })
      .execute(pool);
    }

    response.json({ success: true });
    
  } catch (error) {
    next(error);
  }
}