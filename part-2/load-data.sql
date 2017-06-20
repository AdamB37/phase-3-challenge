COPY grocery_items(name,price,section)
FROM '/Users/adambeshir/Documents/LG_Projects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

COPY orders(order_date)
FROM '/Users/adambeshir/Documents/LG_Projects/phase-3-challenge/part-2/orders.csv' DELIMITER ',' CSV HEADER;

COPY shoppers(first_name,last_name)
FROM '/Users/adambeshir/Documents/LG_Projects/phase-3-challenge/part-2/shoppers.csv' DELIMITER ',' CSV HEADER;

COPY order_items(order_id,item_id)
FROM '/Users/adambeshir/Documents/LG_Projects/phase-3-challenge/part-2/order_items.csv' DELIMITER ',' CSV HEADER;

COPY shopper_order(shopper_id,order_id)
FROM '/Users/adambeshir/Documents/LG_Projects/phase-3-challenge/part-2/shopper_order.csv' DELIMITER ',' CSV HEADER;
