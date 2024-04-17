const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { select } = require('@evershop/postgres-query-builder');

module.exports = {
    Customer: {
        clicks: async ({ customerId }, _, { pool }) => {
            const clicks = await select()
              .from('privacy_clicks')
              .where('privacy_clicks.customer_id', '=', customerId)
              .execute(pool);
            return clicks.map((row) => camelCase(row));
        }
    } 
}

