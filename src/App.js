import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";

function App() {
  const [searchData, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [searchPage, setSearchPage] = useState(false);

  useEffect(() => {
    loadOnce();
  }, []);

  // console.log(searchData);

  function loadOnce() {
    setSearchPage(true);
    setLoading(true);
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3012/api/products/1")
      .then((response) => response.json())
      .then((data) => setSearch(data));
    // .then((data) => console.log(data))
    setLoading(false);
    setSearchPage(false);
    // console.log(searchData);
  }

  function getSearch() {
    setLoading(true);
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3012/api/all/")
      .then((response) => response.json())
      .then((data) =>
        setSearch(
          data.map((elem) => ({
            id: elem.product_id,
            brand: elem.brand,
            product_name: elem.product_name,
            image_url: elem.image_url,
            model: elem.model,
            sku: elem.sku,
            price: elem.price,
          }))
        )
      );
    // .then((data) => console.log(data))
    setLoading(false);

    return searchData;
  }

  // function lo() {
  //   set
  // }

  return searchPage ? (
    <SearchPage searchData={searchData} />
  ) : (
    <div>

    <div><Header getSearch={getSearch} searchData={searchData} /></div>
    
    <div></div>

    
    <div><Footer /></div>
    
    </div>
  );
}

export default App;
