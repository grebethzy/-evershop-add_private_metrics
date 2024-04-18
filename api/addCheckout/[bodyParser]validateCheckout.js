module.exports = (request, response) => {
    const { body } = request;
    
    if (!body.customer_id) {
      throw new Error('cusomter Id is required');
    }

    if (!body.cart) {
      throw new Error('cart is required');
    }
  }