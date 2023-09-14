const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

conn.connect((err) => {
  if (err) console.log(err);
  console.log("Connection created!");
});

// conn.query(`CREATE DATABASE if not exists ${conn.database}`, (err, result) => {
//   if (err) console.log(err);
//   console.log(`${conn.database} database created`);
// });

let products = `CREATE TABLE if not exists Products(
    product_id int auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
)`;

let ProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int not null,
    product_brief_description varchar(255) not null,
    product_description varchar(255) not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

let ProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

// create table for mac products
let macproducts = `CREATE TABLE if not exists macproducts(
    product_id int auto_increment,
    product_url varchar(255) not null,
    product_name varchar(255) not null,
    PRIMARY KEY (product_id)
)`;
let macproductdescription = `CREATE TABLE if not exists macproductdescription(
    description_id int auto_increment,
    product_id int not null,
    product_brief_description varchar(255) not null,
    product_description varchar(255) not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;
let macproductprice = `CREATE TABLE if not exists macproductprice(
    price_id int auto_increment,
    product_id int not null,
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
)`;

// let User = `CREATE TABLE if not exists User(user_id int auto_increment,
//             user_id int auto_increment,
//             User_name varchar(255) not null,
//             PRIMARY KEY (user_id) )`;

// let Orders = `CREATE TABLE if not exists Orders (order_id int auto_increment,
//             user_id int not null,
//             product_id int not null,
//             PRIMARY KEY (order_id),
//             FOREIGN KEY (product_id) REFERENCES Products(product_id))`;

conn.query(products, (err) => {
  if (err) console.error(err);
  console.log("Products Table created");
});

conn.query(ProductDescription, (err) => {
  if (err) console.error(err);
  console.log("ProductDescription Table created");
});
conn.query(ProductPrice, (err) => {
  if (err) console.error(err);
  console.log("ProductPrice Table created");
});
conn.query(macproducts, (err) => {
  if (err) console.error(err);
  console.log(`macproducts Table created`);
});

conn.query(macproductprice, (err) => {
  if (err) console.error(err);
  console.log(`macproductprice Table created`);
});
conn.query(macproductdescription, (err) => {
  if (err) console.error(err);
  console.log(`macproductdescription Table created`);
});
// conn.query(User, (err) => {
//   if (err) console.error(err);
//   console.log("User Table created");
// });
// conn.query(Orders, (err) => {
//   if (err) console.error(err);
//   console.log("Orders Table created");
// });

// add iphones
const addIphones = () => {
  let prod1 = `INSERT INTO Products (product_url, product_name) VALUES ('iphonese', 'iPhone SE')`;

  let prod2 = `INSERT INTO Products (product_url, product_name) VALUES ('iphone11', 'iPhone 11')`;

  let prod3 = `INSERT INTO Products (product_url, product_name) VALUES ('iphone11pro', 'iPhone 11 Pro')`;

  let desc1 = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('1', 'Lots to love. Less to spend.', 'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_se__barrz3dlvxea_small_2x.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11')`;

  let desc2 = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('2', 'Lots to love. Less to spend.', 'You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11__bsnxu2gpf98i_small_2x.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11')`;

  let desc3 = `INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('3', 'Pro cameras. Pro display. Pro performance.', 'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.', 'https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11_pro__d2lf9zrtcv8m_small_2x.jpg','https://www.apple.com/shop/buy-iphone/iphone-11-pro')`;

  let pric1 = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('1', '$399', 'From $9.54/mo. or $229 with trade-in.*')`;

  let pric2 = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('2', '$449', 'From $18.70/mo. or $449 with trade-in.*')`;

  let pric3 = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('3', '$679', 'From $28.29/mo. or $679 with trade-in.*')`;

  conn.query(prod1, (err, results) => {
    if (err) console.error(`error: ${err}`);
    console.log("product 1 inserted");
  });

  conn.query(prod2, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(prod3, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(desc1, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(desc2, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(desc3, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(pric1, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });
  conn.query(pric2, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });
  conn.query(pric3, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });
};

// ***### ADD MAC ###***
const addMac = () => {
  let macprod1 = `INSERT INTO macproducts (product_url, product_name) VALUES ('macbookair15', 'MacBook Air 15”')`;

  let macprod2 = `INSERT INTO macproducts (product_url, product_name) VALUES ('macstudio', 'Mac Studio')`;

  let macprod3 = `INSERT INTO macproducts (product_url, product_name) VALUES ('macpro', 'Mac Pro')`;

  let macdesc1 = `INSERT INTO macproductdescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('1', 'Impressively big. Impossibly thin.', 'The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. And with the 13‑inch model, you have more reasons than ever to choose Air. Supercharged by the M2 chip — and with up to 18 hours of battery life1 — both laptops deliver blazing-fast performance in an ultraportable design.', 'https://www.apple.com/v/macbook-air-13-and-15-m2/b/images/overview/hero/hero_static__6sbma6bp2tu6_medium.jpg', 'https://www.apple.com/shop/buy-mac/macbook-air/15-inch-m2')`;

  let macdesc2 = `INSERT INTO macproductdescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('2', 'Supercharged by M2 Max and M2 Ultra.', 'Embraced by creative pros everywhere, Mac Studio now delivers next-generation power in the form of the lightning-fast M2 Max and the boundary-breaking M2 Ultra. It packs outrageous performance and extensive connectivity in an unbelievably compact form, putting everything you need within easy reach and transforming any space into a studio.', 'https://www.apple.com/v/mac-studio/f/images/overview/hero/static_front__fmvxob6uyxiu_medium.jpg', 'https://www.apple.com/shop/buy-mac/mac-studio')`;

  let macdesc3 = `INSERT INTO macproductdescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('3', 'Transformed by Apple silicon.', 'Mind-blowing performance now comes standard. The new Mac Pro is a game-changing combination of Apple silicon performance and PCIe expansion for specialized workflows. And every configuration comes with the incredible new M2 Ultra — our most powerful and capable chip ever.', 'https://www.apple.com/105/media/us/mac-pro/2019/36178e80-30fd-441c-9a5b-349c6365bb36/overview/hero/medium.mp4','https://www.apple.com/us/shop/goto/buy_mac/mac_pro')`;

  let macpric1 = `INSERT INTO macproductprice (product_id, starting_price, price_range) VALUES ('1', '$1299', 'From $108.25/mo. for 12 mo. or $1299**')`;

  let macpric2 = `INSERT INTO macproductprice (product_id, starting_price, price_range) VALUES ('2', '$1999', 'From $166.58/mo. for 12 mo. or $1999**')`;

  let macpric3 = `INSERT INTO macproductprice (product_id, starting_price, price_range) VALUES ('3', '$6999', 'From $583.25/mo. for 12 mo. or $6999**')`;

  conn.query(macprod1, (err, results) => {
    if (err) console.error(`error: ${err}`);
    console.log("macprod1 inserted");
  });

  conn.query(macprod2, (err, results) => {
    if (err) console.error(`error: ${err}`);
    console.log("macprod2 inserted");
  });

  conn.query(macprod3, (err, results) => {
    if (err) console.error(`error: ${err}`);
    console.log("macprod3 inserted");
  });

  conn.query(macdesc1, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(macdesc2, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(macdesc3, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });

  conn.query(macpric1, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });
  conn.query(macpric2, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });
  conn.query(macpric3, (err, results) => {
    if (err) console.error(`error: ${err}`);
  });
};

// fetch MAC
const getMac = () => {
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
};

// fetch iphones
const getIphones = () => {
  conn.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphone = { products: [] };

      iphone.products = rows;
      var stringIphones = JSON.stringify(iphone);

      if (!err) res.end(stringIphones);
      else console.error(err);
    }
  );
};

module.exports = { conn, addIphones, getIphones, addMac, getMac };
