module.exports = (request, response) => {
    const { body } = request;

    if (!body.customer_id) {
      throw new Error('cusomter Id is required');
    }

    if (!body.metric) {
      throw new Error('metric is required');
    }

    if (!body.deleteDate) {
      throw new Error('delete date is required');
    }
}