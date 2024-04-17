// script to add order table and the triggers

const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  // Create the privacy_orders table
  await execute(
    connection,
    `CREATE TABLE "privacy_orders" (
      "order_id" SERIAL PRIMARY KEY,
      "old_order_id" INT, 
      "cart_id" INT,
      "currency" varchar,
      "customer_id" INT DEFAULT NULL,
      "customer_email" varchar DEFAULT NULL,
      "coupon" varchar DEFAULT NULL,
      "shipping_fee_excl_tax" decimal(12,4) DEFAULT NULL,
      "shipping_fee_incl_tax" decimal(12,4) DEFAULT NULL,
      "discount_amount" decimal(12,4) DEFAULT NULL,
      "sub_total" decimal(12,4),
      "sub_total_incl_tax" decimal(12,4),
      "total_qty" INT,
      "total_weight" decimal(12,4) DEFAULT NULL,
      "tax_amount" decimal(12,4),
      "shipping_note" text DEFAULT NULL,
      "grand_total" decimal(12,4),
      "shipping_method" varchar DEFAULT NULL,
      "shipping_method_name" varchar DEFAULT NULL,
      "shipping_address_id" INT DEFAULT NULL,
      "payment_method" varchar DEFAULT NULL,
      "payment_method_name" varchar DEFAULT NULL,
      "billing_address_id" INT DEFAULT NULL,
      "shipment_status" varchar DEFAULT '0',
      "payment_status" varchar DEFAULT '0',
      "action_time" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
  );

  // Create a function to insert into privacy_orders
  await execute(
    connection,
    `CREATE OR REPLACE FUNCTION duplicate_order_to_privacy_orders()
    RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO privacy_orders (old_order_id, cart_id, currency, customer_id, customer_email, coupon, shipping_fee_excl_tax, shipping_fee_incl_tax, discount_amount, sub_total, sub_total_incl_tax, total_qty, total_weight, tax_amount, shipping_note, grand_total, shipping_method, shipping_method_name, shipping_address_id, payment_method, payment_method_name, billing_address_id, shipment_status, payment_status, action_time)
      VALUES (NEW.order_id, NEW.cart_id, NEW.currency, NEW.customer_id, NEW.customer_email, NEW.coupon, NEW.shipping_fee_excl_tax, NEW.shipping_fee_incl_tax, NEW.discount_amount, NEW.sub_total, NEW.sub_total_incl_tax, NEW.total_qty, NEW.total_weight, NEW.tax_amount, NEW.shipping_note, NEW.grand_total, NEW.shipping_method, NEW.shipping_method_name, NEW.shipping_address_id, NEW.payment_method, NEW.payment_method_name, NEW.billing_address_id, NEW.shipment_status, NEW.payment_status, NEW.created_at);
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    `
  );

  // Create a trigger on the source table to call the insert_into_privacy_orders function
  await execute(
      connection,
      `CREATE TRIGGER trigger_duplicate_order
      AFTER INSERT ON "order"
      FOR EACH ROW
      EXECUTE FUNCTION duplicate_order_to_privacy_orders();
      `
  );

  // create trigger to delete on orders when to delete on privacy_orders 
  await execute(
    connection,
    `CREATE OR REPLACE FUNCTION delete_from_order()
    RETURNS TRIGGER AS $$
    BEGIN
      DELETE FROM "order" WHERE order_id = OLD.old_order_id;
      RETURN OLD;
    END;
    $$ LANGUAGE plpgsql;
    `
  );

  await execute(
    connection,
    `CREATE TRIGGER trigger_delete_from_order
    AFTER DELETE ON privacy_orders
    FOR EACH ROW
    EXECUTE FUNCTION delete_from_order();
    `
  );

}
