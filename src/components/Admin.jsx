import React, { useState } from "react";


const Admin = ({addProduct}) => {
    const [image , setImage] = useState('')
    const [name , setName] = useState('')
    const [price , setPrice] = useState('')


    function handelChenge() {
        let obj = {
            name: name,
            price: price , 
            image: image,
            id: Date.now()
        }
        addProduct(obj)
    }

  return (
    <div className="admint">
      <div className="container">
        <div className="admint">
          <h1>CREATE PRODUCT</h1>
          <div className="admin-box">
            <div className="admin-input">
              <div className="fool">
                <h3>choose file</h3>
              </div>
              <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="food name" />
              <input  onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="price" />
              <button onClick={() => handelChenge()}>create</button>
            </div>
            <div className="admit-img">
              <input onChange={(e)=> setImage(e.target.value)} type="text" placeholder="place for a photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
