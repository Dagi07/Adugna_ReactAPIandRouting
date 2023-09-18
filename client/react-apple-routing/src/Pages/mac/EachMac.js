import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function EachMac() {
    const [product, setProduct] = useState([]);
    // useParams hook accesses parameters from the current route
    const { urLink } = useParams();

    useEffect(() => {
        // fetch("http://localhost:7000/mac")
        fetch("https://applewebsite.onrender.com/mac")
            .then((sp) => sp.json())
            .then((data) => {
                const prodLiist = data.products;
                const singleProduct = prodLiist.filter(
                    (singProd) => singProd.product_url == urLink
                );
                setProduct(singleProduct);
            });
    });

    if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {product?.map((prod) => {
              // console.log(prod);
              return (
                <div key={prod.product_id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <div className="title-wraper font-weight-bold">
                        {prod.product_name}
                      </div>
                      <div className="brief-description">
                        {prod.product_brief_description}
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className="col-sm-12 col-md-6 my-auto">
                      <div className="starting-price">
                        {`Starting at ${prod.starting_price} `}
                      </div>
                      <div className="monthly-price">{prod.price_range}</div>
                      <div className="product-details">
                        {prod.product_description}
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="product-image">
                        <img src={prod.product_img} alt="product" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default EachMac