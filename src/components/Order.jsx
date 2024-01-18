import React, { useEffect } from "react";

const Order = ({ orderes }) => {
  return (
    <div className="oreders">
      <div className="container">
        <div className="orders">
          <h1>MY ORDERS</h1>
          <div className="order-box">
            {orderes &&
              Array.isArray(orderes) &&
              orderes.map((el, index) => (
                <div key={index} className="order-card">
                  <img src={el.image} alt="" />
                  <div className="oreder-food">
                    <p className="foodname">{el.name}</p>
                    <h3 className="foodprice">{el.price}</h3>
                  </div>
                  <div className="oreder-btn">
                    <button className="btn-del">delete order</button>
                    <div className="order-mn">
                      <button>-</button>
                      <h2>0</h2>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
