const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { insert } = require('@evershop/postgres-query-builder');

module.exports = async function graphql(request, response, delegate, next) {
  try {
    const { body: { customer_id, customer_email, cart_id, cart, items } } = request;
    const productNames = items.map(item => item.productName).join(', ');
    const productSKUs = items.map(item => item.productSku).join(', ');
    await insert('privacy_checkouts')
      .given({
        customer_id,
        customer_email, 
        cart_id: cart_id, 
        totalqty: cart.totalQty,
        subtotalvalue: cart.subTotal ? cart.subTotal.value: null, 
        subtotaltext: cart.subTotal ? cart.subTotal.text: null,
        subtotalincltaxvalue: cart.subTotalInclTax ? cart.subTotalInclTax.value: null, 
        subtotalincltaxtext: cart.subTotalInclTax ? cart.subTotalInclTax.text: null,
        taxamountvalue: cart.taxAmount ? cart.taxAmount.value: null,
        taxamounttext: cart.taxAmount ? cart.taxAmount.text: null,
        discountamountvalue: cart.discountAmount ? cart.discountAmount.value: null,
        discountamounttext: cart.discountAmount ? cart.discountAmount.text: null,
        coupon: cart.coupon, 
        grandtotalvalue: cart.grandTotal ? cart.grandTotal.value: null,
        grandtotaltext: cart.grandTotal ? cart.grandTotal.text: null,
        productnames: productNames,
        productskus: productSKUs
      })
      .execute(pool);
    response.json({ success: true });
  } catch (error) {
    next(error);
  }
}