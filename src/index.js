import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
// import SearchPage from './components/SearchPage';

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Header />} />
      <Route path="searchpage" element={<SearchPage />} />
  </Routes>
  
  </BrowserRouter>
);

// const searchPageLive = ReactDOM.createRoot(document.getElementById('search-page'));
// searchPageLive.render(
//   <React.StrictMode>
//     <SearchPage />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
