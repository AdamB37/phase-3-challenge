const pg = require('pg-promise')()

const pgConfig = {
  // host: 'localhost',
  // port: 5432,
  database: 'grocery_store',
  // user: 'adambeshir',
  // password: ''
}

const db = pg(pgConfig)

const queryAllItems = 'SELECT * FROM grocery_items'
const queryItemsInSection = 'SELECT id, name FROM grocery_items WHERE section=${section}'
const queryCheapItems = 'SELECT id,name, price FROM grocery_items WHERE price < 10 ORDER BY price'
const queryCountItemsInSection = 'SELECT COUNT(*) FROM grocery_items WHERE section=${section}'
const queryMostRecentOrders = 'SELECT id,order_date FROM orders ORDER BY order_date desc limit 10'
const queryLastShopperName = 'SELECT first_name, last_name FROM shoppers\
                              JOIN shopper_order ON shoppers.id = shopper_id\
                              JOIN orders ON orders.id = order_id\
                              ORDER BY order_date desc limit 1'
const queryOrderTotal = 'SELECT SUM(PRICE) FROM orders JOIN order_items ON orders.id = order_id\
                         JOIN grocery_items ON grocery_items.id = item_id where orders.id = ${order_id}'




const allItems = () => db.any(queryAllItems)
const itemsInSection = (attributes) => db.any(queryItemsInSection, attributes)
const cheapItems = () => db.any(queryCheapItems)
const countItemsInSection = (attributes) => db.one(queryCountItemsInSection, attributes)
const mostRecentOrders = () => db.any(queryMostRecentOrders)
const lastShopperName = () => db.any(queryLastShopperName)
const orderTotal = (attributes) => db.any(queryOrderTotal, attributes)

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
}
