import React, { useEffect, useState } from "react";
import "../../commonResource/css/bootstrap.css";
import "../../commonResource/css/styles.css";
import { Link } from "react-router-dom";

function Iphone() {
  const [prodState, setProdState] = useState([]);

  useEffect(() => {
    fetch("https://applewebsite.onrender.com/iphone")
      .then((res) => res.json())
      .then((productState) => {
        let prodsArr = productState.products;
        // let prodsArr = products;

        setProdState(prodsArr);
      });
  }, []);

  console.log(prodState);

  let order = 1;

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">Iphones</div>

              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {prodState.map((eachProduct) => {
            let id = eachProduct.product_id;
            let title = eachProduct.product_name;
            let img = eachProduct.product_img;
            let brief = eachProduct.product_brief_description;
            let startPrice = eachProduct.starting_price;
            let priceRange = eachProduct.price_range;
            let productPage = eachProduct.productPage;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            // console.log(order1, order2);

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{brief}</div>
                  <div className="starting-price">{`Starting at ${startPrice}`}</div>
                  <div className="monthly-price">{priceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 my-auto order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
