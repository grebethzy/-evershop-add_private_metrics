const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { select } = require('@evershop/postgres-query-builder');

module.exports = {
    Customer: {
        privacyOrders: async ({ customerId }, _, { pool }) => {
            const privacyOrders = await select()
              .from('privacy_orders')
              .where('privacy_orders.customer_id', '=', customerId)
              .execute(pool);
            return privacyOrders.map((row) => camelCase(row));
        }
    } 
}
