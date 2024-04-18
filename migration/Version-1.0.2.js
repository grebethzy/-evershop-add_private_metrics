// script to create add to cart table and triggers

const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  // Create the privacy_addtocarts table
  await execute(
    connection,
    `CREATE TABLE "privacy_addtocarts" (
      addtocart_id SERIAL PRIMARY KEY,
      customer_id INT,
      customer_email varchar, 
      product_id INT, 
      action_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
  );

  // Create a function to insert into privacy_addtocarts
  await execute(
    connection,
    `CREATE OR REPLACE FUNCTION insert_into_privacy_addtocarts()
      RETURNS TRIGGER AS $$
      DECLARE
          cart_id_var INT;
          customer_id_var INT;
          customer_email_var VARCHAR;
      BEGIN
          -- Check if this is a new row insertion or qty increment
          IF TG_OP = 'INSERT' OR (TG_OP = 'UPDATE' AND NEW.qty > OLD.qty) THEN
              -- Get the cart_id associated with the product_id
              SELECT cart_id INTO cart_id_var
              FROM cart_item
              WHERE product_id = NEW.product_id;

              -- Get the customer_id and customer_email associated with the cart_id
              SELECT customer_id, customer_email INTO customer_id_var, customer_email_var
              FROM cart
              WHERE cart_id = cart_id_var;

              -- Check if customer_id is found; if not, fetch from customer table using email
              IF customer_id_var IS NULL AND customer_email_var IS NOT NULL THEN
                  SELECT customer_id INTO customer_id_var
                  FROM customer
                  WHERE email = customer_email_var;
              END IF;

              -- Insert into privacy_addtocarts with the fetched values
              -- Only insert if customer_id is not null
              IF customer_id_var IS NOT NULL THEN
                  INSERT INTO privacy_addtocarts (customer_id, customer_email, product_id)
                  VALUES (customer_id_var, customer_email_var, NEW.product_id);
              END IF;
          END IF;

          RETURN NEW;
      END;
  $$ LANGUAGE plpgsql;
  `
);

// Create a trigger on the source table to call the insert_into_privacy_addtocarts function
await execute(
    connection,
    `CREATE TRIGGER trigger_insert_into_privacy_addtocarts
    AFTER INSERT OR UPDATE ON "cart_item"
    FOR EACH ROW
    WHEN (NEW.qty > 0)
    EXECUTE FUNCTION insert_into_privacy_addtocarts();`
);


}
