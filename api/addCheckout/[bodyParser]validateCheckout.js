module.exports = (request, response) => {
    const { body } = request;
    
    if (!body.customer_id) {
      throw new Error('cusomter Id is required');
    }

    if (!body.cart_id) {
      throw new Error('cart Id is required');
    }
  }