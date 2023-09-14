import React, { useEffect, useState } from "react";

const Mac = () => {
  const [prodState, setProdState] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch("http://localhost:7000/mac")
      .then((jsonData) => jsonData.json())
      .then((objData) => {
        let dataArr = objData.products;
        setProdState(dataArr);
      });
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", setWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", setWidth(window.innerWidth));
  }, []);

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
              <div className="title-wraper">Mac</div>

              <div className="brief-description">
                Which Mac is right for you?
              </div>
            </div>
          </div>
          {prodState.map((eachMac) => {
            let order1 = 1;
            let order2 = 2;
            if (width > 768) {
              if (order !== 1) {
                order1 = 2;
                order2 = 1;
                order--;
              } else {
                order++;
              }
            }

            <div
              key={eachMac.product_id}
              className="row justify-content-center text-center product-holder h-100 mt-5 mt-md-0"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title">{eachMac.product_name}</div>
                <div className="product-brief">
                  {eachMac.product_brief_description}
                </div>
                <div className="starting-price">{`Starting at ${eachMac.starting_price}`}</div>
                <div className="monthly-price">{eachMac.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      {/* ${console.log("productPage", productPage)} */}
                      <Link to={"/iphone/" + eachMac.product_url}>
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 my-auto order-${order2}`}>
                <div className="product-image">
                  <img src={eachMac.product_img} alt="" />
                </div>
              </div>
            </div>;
          })}
        </div>
      </section>
    </div>
  );
};

export default Mac;
