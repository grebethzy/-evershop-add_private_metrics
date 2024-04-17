module.exports = (request, response) => {
    const { body } = request;
    if (!body.customer_id) {
      throw new Error('cusomter Id is required');
    }

    if (!body.product_id) {
      throw new Error('product Id is required');
    }

  }