import React, { useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const Menu = ({
  readProduct,
  data,
  deleteProduct,
  editBlock,
  orederProduct,
}) => {
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div className="menus">
      <div className="container">
        <div className="menus">
          <h1>MENU</h1>
          <div className="munus-box">
            {data.map((el, index) => (
              <div key={index} className="card">
                <img src={el.image} alt="" />
                <div className="card-txt">
                  <p>{el.name}</p>
                  <h3>{el.price}</h3>
                </div>
                <div className="card-btn">
                  <button
                    onClick={() => deleteProduct(el.id)}
                    style={{
                      border: "none",
                      color: "red",
                      background: "0",
                      fontSize: "25px",
                    }}
                  >
                    <RiDeleteBin5Line />
                  </button>
                  <Link to={`/edit/${el.id}`}>
                    <button
                      onClick={() => editBlock(index)}
                      style={{
                        border: "none",
                        color: "green",
                        background: "0",
                        fontSize: "25px",
                      }}
                    >
                      <CiEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => orederProduct(el)}
                    className="btn-order"
                  >
                    {" "}
                    to order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
