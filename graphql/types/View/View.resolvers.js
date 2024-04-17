const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { select } = require('@evershop/postgres-query-builder');

module.exports = {
    Customer: {
        views: async ({ customerId }, _, { pool }) => {
            const views = await select()
              .from('privacy_views')
              .where('privacy_views.customer_id', '=', customerId)
              .execute(pool);
            return views.map((row) => camelCase(row));
        }
    }
}

