import { useState } from "react";
import "./App.css";
import AddProduct from "./addProduct";
import DisplayProduct from "./displayProduct";
import apiRequest from "./apiRequest";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [success, setSuccess] = useState(false);
  const handleForm = () => {
    setShowAddForm(true);
    setShowList(false);
  };

  const handleList = () => {
    setShowList(true);
    setShowAddForm(false);
    fetchItems();

  };

  const fetchItems = async () => {
    const API_URL = "http://localhost:8080/product/lists";
    try {
      const response = await apiRequest(API_URL);
      const listItems = await response.json();
      setItems(listItems);
    } catch (err) {
      console.log(err);
      setIsError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const API_URL = "http://localhost:8080/product/create";
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "productName": name, "price": price, "category": category })
    };
    fetch(API_URL, requestOptions)
      .then(response => response.json())
      .then((data) => { setSuccess(true); setName(''); setPrice(''); setCategory('') });
  };
  const closeSuccess = (e) => {
    e.preventDefault();
    setSuccess(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Catalog System</h1>
      </header>
      <main>
        <div className="button-group">
          <button
            type="button"
            className="primary-btn"
            onClick={() => handleForm()}
            disabled={showAddForm}
          >
            Add Product
          </button>
          <button
            type="button"
            className="secondary-btn"
            onClick={() => handleList()}
            disabled={showList}
          >
            Display Products
          </button>
        </div>
        {success && <p className="success">Product Successfully Added! <span onClick={(e) => closeSuccess(e)}>X</span></p>}
        {showAddForm && (
          <AddProduct
            submitHandler={submitHandler}
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
          />
        )}
        {isLoading && showList && <p style={{ textAlign: "center", padding: "10px" }}>Loading Items</p>}
        {isError && showList && <p>{isError}</p>}
        {showList && !isError && !isLoading && <DisplayProduct items={items} />}

      </main>
    </div>
  );
}

export default App;