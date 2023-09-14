const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const conn = require("./config/db");
const { conn, addIphones, getIphones, addMac, getMac } = require("./config/db");

const port = process.env.PORT;

let app = express();

app.use(cors());

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is listening on port ${port}..`);
});

app.get("/addIphones", (req, res) => {
  addIphones();
});

app.get("/iphone", (req, res) => {
  conn.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphone = { products: [] };

      iphone.products = rows;
      let stringIphones = JSON.stringify(iphone);

      if (!err) res.end(stringIphones);
      else console.error(err);
    }
  );
});
app.get("/addmac", (req, res) => {
  addMac();
});

app.get("/mac", (req, res) => {
  // fetch MAC
  conn.query(
    "SELECT * FROM macproducts JOIN macproductdescription JOIN macproductprice ON macproducts.product_id = macproductdescription.product_id AND macproducts.product_id = macproductprice.product_id",
    (err, rows, fields) => {
      //   console.log(rows);
      let mac = { products: [] };

      mac.products = rows;

      let stringMac = JSON.stringify(mac);
      //   console.log(stringMac);

      if (!err) res.end(stringMac);
      else console.error(err);
    }
  );
});

// const mysql = require("mysql2");
// const express = require("express");
// const cors = require("cors");

// let conn = mysql.createConnection({
//   host: "localhost",
//   user: "appleProductsUser",
//   password: "appleProductsUser",
//   database: "apple_products",
// });

// conn.connect((err) => {
//   if (err) console.log(err);
//   console.log("Connection created!");
// });

// conn.query(`CREATE DATABASE if not exists apple_products`, (err, result) => {
//   if (err) console.log(err);
//   console.log("apple_products database created");
// });

// let app = express();

// const corsOptions = {
//   origin: "http://localhost:3000/",
//   optionSuccessStatus: 200,
// };

// app.use(cors());

// app.listen(7000, (err) => {
//   if (err) throw err;
//   console.log("Server is listening on port 7000..");
// });

// // let products = `CREATE TABLE if not exists Products(
// //             product_id int auto_increment,
// //             product_url varchar(255) UNIQUE,
// //             product_name varchar(255) unique,
// //             PRIMARY KEY (product_id)
// //         )`;

// // let ProductDescription = `CREATE TABLE if not exists ProductDescription(
// //             description_id int auto_increment,
// //             product_id int UNIQUE,
// //             product_brief_description varchar(255) UNIQUE,
// //             product_description varchar(255) UNIQUE,
// //             product_img varchar(255) not null,
// //             product_link varchar(255) not null,
// //             PRIMARY KEY (description_id),
// //             FOREIGN KEY (product_id) REFERENCES Products(product_id)
// //         )`;

// // let ProductPrice = `CREATE TABLE if not exists ProductPrice(
// //             price_id int auto_increment,
// //             product_id int not null,
// //             starting_price varchar(255) not null,
// //             price_range varchar(255) not null,
// //             PRIMARY KEY (price_id),
// //             FOREIGN KEY (product_id) REFERENCES Products(product_id)
// //         )`;

// let products = `CREATE TABLE if not exists Products(
//   product_id int auto_increment,
//   product_url varchar(255) not null,
//   product_name varchar(255) not null,
//   PRIMARY KEY (product_id)
// )`;

// let ProductDescription = `CREATE TABLE if not exists ProductDescription(
//   description_id int auto_increment,
//   product_id int not null,
//   product_brief_description varchar(255) not null,
//   product_description varchar(255) not null,
//   product_img varchar(255) not null,
//   product_link varchar(255) not null,
//   PRIMARY KEY (description_id),
//   FOREIGN KEY (product_id) REFERENCES Products(product_id)
// )`;

// let ProductPrice = `CREATE TABLE if not exists ProductPrice(
//   price_id int auto_increment,
//   product_id int not null,
//   starting_price varchar(255) not null,
//   price_range varchar(255) not null,
//   PRIMARY KEY (price_id),
//   FOREIGN KEY (product_id) REFERENCES Products(product_id)
// )`;

// // let User = `CREATE TABLE if not exists User(user_id int auto_increment,
// //             user_id int auto_increment,
// //             User_name varchar(255) not null,
// //             PRIMARY KEY (user_id) )`;

// // let Orders = `CREATE TABLE if not exists Orders (order_id int auto_increment,
// //             user_id int not null,
// //             product_id int not null,
// //             PRIMARY KEY (order_id),
// //             FOREIGN KEY (product_id) REFERENCES Products(product_id))`;

// conn.query(products, (err) => {
//   if (err) console.error(err);
//   console.log("Products Table created");
// });

// conn.query(ProductDescription, (err) => {
//   if (err) console.error(err);
//   console.log("ProductDescription Table created");
// });
// conn.query(ProductPrice, (err) => {
//   if (err) console.error(err);
//   console.log("ProductPrice Table created");
// });
// // conn.query(User, (err) => {
// //   if (err) console.error(err);
// //   console.log("User Table created");
// // });
// // conn.query(Orders, (err) => {
// //   if (err) console.error(err);
// //   console.log("Orders Table created");
// // });

// // app.get("/addIphones", (req, res) => {
// //   let prod1 = `
// // INSERT INTO Products (product_url, product_name)
// // SELECT 'iphonese', 'iPhone SE'
// // WHERE NOT EXISTS (SELECT * FROM Products
// //   WHERE product_url='iphonese' AND product_name='iPhone SE' LIMIT 1)

// // `;

// //   let prod2 = `
// // INSERT INTO Products (product_url, product_name)
// // SELECT 'iphone11', 'iPhone 11'
// // WHERE NOT EXISTS (SELECT * FROM Products
// //   WHERE product_url='iphone11' AND product_name='iPhone 11' LIMIT 1)
// // `;

// //   let prod3 = `
// // INSERT INTO Products (product_url, product_name)
// // SELECT 'iphone11pro', 'iPhone 11 Pro'
// // WHERE NOT EXISTS (SELECT * FROM Products
// //   WHERE product_url='iphone11pro' AND product_name='iPhone 11 Pro' LIMIT 1)
// // `;

// //   let desc1 = `
// // INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link)
// // SELECT '1', 'Lots to love. Less to spend.', 'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11'
// // WHERE NOT EXISTS (SELECT * FROM ProductDescription
// //   WHERE product_id='1' AND product_brief_description='Lots to love. Less to spend.' AND product_description='iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.' AND product_img='https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg' AND product_link='https://www.apple.com/shop/buy-iphone/iphone-11' LIMIT 1)
// // `;

// //   let desc2 = `
// // INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link)
// // SELECT '2', 'Lots to love. Lesser to spend.', 'You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11__bsnxu2gpf98i_small_2x.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11'
// // WHERE NOT EXISTS (SELECT * FROM ProductDescription
// //   WHERE product_id='2' AND product_brief_description='Lots to love. Less to spend.' AND product_description='You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.' AND product_img='https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11__bsnxu2gpf98i_small_2x.jpg' AND product_link='https://www.apple.com/shop/buy-iphone/iphone-11' LIMIT 1)

// // `;

// //   let desc3 = `
// // INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link)
// // SELECT '3', 'Pro cameras. Pro display. Pro performance.', 'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',  'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11_pro__d2lf9zrtcv8m_small_2x.jpg','https://www.apple.com/shop/buy-iphone/iphone-11-pro'
// // WHERE NOT EXISTS (SELECT * FROM ProductDescription
// //   WHERE product_id='3' AND product_brief_description='Pro cameras. Pro display. Pro performance.' AND product_description='A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.' AND product_img='https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11_pro__d2lf9zrtcv8m_small_2x.jpg' AND product_link='https://www.apple.com/shop/buy-iphone/iphone-11-pro' LIMIT 1)
// // `;
// //   // conn.query(
// //   //   "UPDATE ProductDescription SET product_brief_description='Pro cameras. Pro display. Pro performance.' WHERE product_id='3'",
// //   //   (err, results) => {
// //   //     if (err) console.error(`error: ${err}`);
// //   //     console.log("Updated product brief description");
// //   //   }
// //   // );
// //   // conn.query(
// //   //   "UPDATE ProductDescription SET product_description='A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.' WHERE product_id='3'",
// //   //   (err, results) => {
// //   //     if (err) console.error(`error: ${err}`);
// //   //     console.log("Updated product description column");
// //   //   }
// //   // );

// //   let pric1 = `INSERT INTO ProductPrice (product_id, starting_price, price_range)
// // SELECT '1', '$399', 'From $9.54/mo. or $229 with trade-in.*'
// // WHERE NOT EXISTS (SELECT * FROM ProductPrice
// //   WHERE product_id='1' AND starting_price='$399' AND price_range='From $9.54/mo. or $229 with trade-in.*' LIMIT 1)
// // `;

// //   let pric2 = `
// // INSERT INTO ProductPrice (product_id, starting_price, price_range)
// // SELECT '2', '$449', 'From $18.70/mo. or $449 with trade-in.*'
// // WHERE NOT EXISTS (SELECT * FROM ProductPrice
// //   WHERE product_id='2' AND starting_price='$449' AND price_range='From $18.70/mo. or $449 with trade-in.*' LIMIT 1)
// // `;

// //   let pric3 = `
// // INSERT INTO ProductPrice (product_id, starting_price, price_range)
// // SELECT '3', '$679', 'From $28.29/mo. or $679 with trade-in.*'
// // WHERE NOT EXISTS (SELECT * FROM ProductPrice
// //   WHERE product_id='3' AND starting_price='$679' AND price_range='From $28.29/mo. or $679 with trade-in.*' LIMIT 1)
// // `;

// //   conn.query(prod1, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //     console.log("product 1 inserted");
// //   });

// //   conn.query(prod2, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });

// //   conn.query(prod3, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });

// //   conn.query(desc1, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });

// //   conn.query(desc2, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });

// //   conn.query(desc3, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });

// //   conn.query(pric1, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });
// //   conn.query(pric2, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });
// //   conn.query(pric3, (err, results) => {
// //     if (err) console.error(`error: ${err}`);
// //   });
// // });

// app.get("/addIphones", (req, res) => {
//   let prod1 = `INSERT INTO Products (product_url, product_name) VALUES ('iphonese', 'iPhone SE')`;

//   let prod2 = `INSERT INTO Products (product_url, product_name) VALUES ('iphone11', 'iPhone 11')`;

//   let prod3 = `INSERT INTO Products (product_url, product_name) VALUES ('iphone11pro', 'iPhone 11 Pro')`;

//   let desc1 = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('1', 'Lots to love. Less to spend.', 'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11')`;

//   let desc2 = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('2', 'Lots to love. Less to spend.', 'You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11__bsnxu2gpf98i_small_2x.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11')`;

//   let desc3 = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('3', 'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.', 'Pro cameras. Pro display. Pro performance.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11_pro__d2lf9zrtcv8m_small_2x.jpg','https://www.apple.com/shop/buy-iphone/iphone-11-pro')`;

//   let pric1 = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('1', '$399', 'From $9.54/mo. or $229 with trade-in.*')`;

//   let pric2 = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('2', '$449', 'From $18.70/mo. or $449 with trade-in.*')`;

//   let pric3 = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('3', '$679', 'From $28.29/mo. or $679 with trade-in.*')`;

//   conn.query(prod1, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//     console.log("product 1 inserted");
//   });

//   conn.query(prod2, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });

//   conn.query(prod3, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });

//   conn.query(desc1, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });

//   conn.query(desc2, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });

//   conn.query(desc3, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });

//   conn.query(pric1, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });
//   conn.query(pric2, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });
//   conn.query(pric3, (err, results) => {
//     if (err) console.error(`error: ${err}`);
//   });
// });

// // app.get("/iphone", (req, res) => {
// //   conn.query(
// //     "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
// //     (err, rows, fields) => {
// //       let iphone = { products: [] };
// //       iphone.products = rows;
// //       var stringIphones = JSON.stringify(iphone);
// //       if (!err) res.end(stringIphones);
// //       else console.error(err);
// //     }
// //   );
// // });
// app.get("/iphone", (req, res) => {
//   conn.query(
//     "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
//     (err, rows, fields) => {
//       let iphone = { products: [] };
//       iphone.products = rows;
//       var stringIphones = JSON.stringify(iphone);
//       if (!err) res.end(stringIphones);
//       else console.error(err);
//     }
//   );
// });
