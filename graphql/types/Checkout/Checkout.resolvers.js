const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { select } = require('@evershop/postgres-query-builder');

module.exports = {
    Query: {
        checkout: async (r, c, { cartId }) => ({
            cartId
        })
    },

    Customer: {
        checkouts: async ({ customerId }, _, { pool }) => {
            const checkouts = await select()
              .from('privacy_checkouts')
              .where('privacy_checkouts.customer_id', '=', customerId)
              .execute(pool);
            return checkouts.map((row) => camelCase(row));
        }
    } 
};