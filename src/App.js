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
    fetch("http://localhost:3012/api/all")
      .then((response) => response.json())
      .then((data) => setSearch(data));
    // .then((data) => console.log(data))
    setLoading(false);
    setSearchPage(false);
    // console.log(searchData);
  }

  function getSearch(e) {
    console.log(e.target)
    setLoading(true);
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3012/api/products/1")
      .then((response) => response.json())
      .then((data) => setSearch(data));
      
    // .then((data) => console.log(data))
    setLoading(false);

    return searchData;
  }

  // function lo() {
  //   set
  // }

  return searchPage ? (
    <SearchPage searchData={searchData} setSearchPage={setSearchPage}/>) 
    
    : 
    
    
    (<div>
      <div>
      <Header getSearch={getSearch} searchData={searchData} setSearchPage={setSearchPage}/></div>
    
    <div></div>

    
    <div><Footer /></div>
    
    </div>
  );
}

export default App;
