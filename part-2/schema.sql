DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price DECIMAL(10,2),
  section TEXT
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_date TIMESTAMP
);


CREATE TABLE order_items (
  order_id SERIAL REFERENCES orders (id),
  item_id SERIAL REFERENCES grocery_items (id)
);

CREATE TABLE shopper_order (
  shopper_id SERIAL REFERENCES shoppers(id),
  order_id SERIAL REFERENCES orders (id)
);
