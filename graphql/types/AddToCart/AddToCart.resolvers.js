const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { select } = require('@evershop/postgres-query-builder');

module.exports = {
    Customer: {
        addToCarts: async ({ customerId }, _, { pool }) => {
            const addToCarts = await select()
              .from('privacy_addtocarts')
              .where('privacy_addtocarts.customer_id', '=', customerId)
              .execute(pool);
            return addToCarts.map((row) => camelCase(row));
        }
    } 
}
