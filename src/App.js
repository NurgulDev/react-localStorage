import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import Order from "./components/Order";
import { useEffect, useState } from "react";
import EditComponents from "./components/EditComponents";

function App() {
  const [data, setData] = useState([]);
  const [editInput, setEditInput] = useState({});

  const [orderes, setOrderes] = useState([]);

  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    data.push(newProduct);
    localStorage.setItem("menu", JSON.stringify(data));
    readProduct();
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    setData(data);
  }

  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    let deleteData = data.filter((el) => el.id !== id);
    localStorage.setItem("menu", JSON.stringify(deleteData));
    readProduct();
  }

  function editBlock(index) {
    setEditInput(data[index]);
  }

  function editSave(newProduct) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];

    let newData = data.map((el) => {
      if (newProduct.id === el.id) {
        return newProduct;
      }

      return el;
    });
    localStorage.setItem("menu", JSON.stringify(newData));
  }

  function orederProduct(el) {
    orderes.push(el);
    localStorage.setItem("order", JSON.stringify(orderes));
  }

  useEffect(() => {
    const storageOrder = JSON.parse(localStorage.getItem("order")) || [];
    if (storageOrder) {
      setOrderes([...storageOrder]);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route
          path="/menu"
          element={
            <Menu
              readProduct={readProduct}
              data={data}
              deleteProduct={deleteProduct}
              editBlock={editBlock}
              orederProduct={orederProduct}
            />
          }
        />
        <Route path="/order" element={<Order orderes={orderes} />} />
        <Route
          path="/edit/:id"
          element={<EditComponents editInput={editInput} editSave={editSave} />}
        />
      </Routes>
    </div>
  );
}

export default App;
