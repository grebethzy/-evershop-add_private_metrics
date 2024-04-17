console.log("trying to delete0"); 
const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { insert } = require('@evershop/postgres-query-builder');

async function deleteMetricData(deleteDate, metric, customer_id) {
  const metricTableMap = {
    clicks: 'privacy_clicks',
    views: 'privacy_views',
    addToCarts: 'privacy_addtocarts', 
    checkouts: 'privacy_checkouts',
    privacyOrders: 'privacy_orders'
  };

  const tableName = metricTableMap[metric];
  if (!tableName) {
    throw new Error(`Invalid metric: ${metric}`);
  }

  const startDate = `${deleteDate}T00:00:00+08`;
  const endDate = `${deleteDate}T23:59:59+08`;


  const query = `
    DELETE FROM ${tableName}
    WHERE (action_time BETWEEN $1 AND $2) AND customer_id = $3
    RETURNING *
  `;

  try {
    const result = await pool.query(query, [startDate, endDate, customer_id]);
    if (result.rowCount === 0) {
      console.log(`No records found to delete for metric '${metric}' on '${deleteDate}' for customer '${customer_id}'.`);
    } else {
      console.log(`Deleted records:`, result.rows);
    }
  } catch (error) {
    console.error("Error during deletion:", error);
    throw error;
  }
  
  console.log("delete attempt done"); 
}

module.exports = async function graphql(request, response, delegate, next) {
  try {
    const { body: { deleteDate, metric, customer_id } } = request;

    if (deleteDate && metric) {
      await deleteMetricData(deleteDate, metric, customer_id);
      return response.json({ success: true, message: `Data for metric '${metric}' on '${deleteDate}' deleted successfully.` });
    }

  } catch (error) {
    console.error(error);
    next(error);
  }
};