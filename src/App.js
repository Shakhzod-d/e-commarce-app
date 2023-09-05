import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import "./App.css";
import Pagination from "./components/PageCounter";
import Header from "./components/Header";
import ModalWindow from "./components/ModalWindow";
import useFetch from "./hooks/useFetch";
import SelectComponent from "./components/SelectComponent";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countPage, setCountPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const [cartItems, setCartItem] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const url = `https://dummyjson.com/products?limit=${countPage}`;
  const categoriesUrl = `https://dummyjson.com/products/categories`;

  useFetch(url, countPage, setItems, setLoading);
  useFetch(categoriesUrl, countPage, setCategories, setLoading);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setCountPage((countPage) => 20 * currentPage);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ModalWindow
        items={cartItems}
        open={modalOpen}
        handleClose={handleModalClose}
      />
      <h1>thi</h1>

      <Header handleModalOpen={handleModalOpen} counter={cartItems?.length} />

      <SelectComponent
        items={categories}
        setItems={setItems}
        setLoading={setLoading}
      />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 style={{ textAlign: "start" }}>Products</h2>
          <ItemList addProduct={setCartItem} items={items?.products} />
        </>
      )}

      <Pagination
        page={currentPage}
        pageCount={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
