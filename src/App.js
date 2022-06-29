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
   
    setLoading(true);
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3012/api/products/1")
      .then((response) => response.json())
      .then((data) => setSearch(data));
    // .then((data) => console.log(data))
    setLoading(false);
   
    // console.log(searchData);
  }

  function getSearch() {
    setSearchPage(true)
    console.log()
    setLoading(true);
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3012/api/products/")
      .then((response) => response.json())
      .then((data) => console.log(data));
      
    // .then((data) => console.log(data))
    setLoading(false);

    return searchData;
  }

  // function lo() {
  //   set
  // }

  return searchPage ? (
    <SearchPage searchData={searchData} setSearchPage={setSearchPage}/>
  ) : (
    <div>

    <div><Header searchData={searchData} setSearchPage={setSearchPage} setLoading={setLoading} setLoadingMessage={setLoadingMessage}/></div>
    
    <div></div>

    
    <div><Footer /></div>
    
    </div>
  );
}

export default App;
