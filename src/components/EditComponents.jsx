import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditComponents = ({ editInput, editSave }) => {
  const [product, setProduct] = useState(editInput);

  function editImage(e) {
    let newObj = {...product};
    newObj.image = e.target.value
    setProduct(newObj)
  }

  function editName(e) {
    let newObj = {...product};
    newObj.name = e.target.value
    setProduct(newObj)

  }


  function editPrice(e) {
    let newObj = {...product};
    newObj.price = e.target.value
    setProduct(newObj)

  }


  function handelSave() {
    
    editSave(product)
  }

  return (
    <div className="admint">
      <div className="container">
        <div className="admint">
          <h1>EDIT PRODUCT</h1>
          <div className="admin-box">
            <div className="admin-input">
              <div className="fool">
                <h3>choose file</h3>
              </div>
              <input onChange={editName} value={product.name} type="text" placeholder="food name" />
              <input onChange={editPrice} value={product.price} type="text" placeholder="price" />
             <Link to="/menu">
             <button onClick={handelSave}>save</button>
             </Link>
            </div>
            <div className="admit-img">
              <input onChange={editImage}
                value={product.image}
                type="text"
                placeholder="place for a photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditComponents;
