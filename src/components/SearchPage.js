import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function SearchPage(searchData) {
  let searchD = searchData[0];
  console.log(searchD);
  return (
    <div>
      <Header />

      <img
        src="https://tpc.googlesyndication.com/simgad/16755221423212752458"
        border="0"
        width="970"
        height="33"
        alt=""
        class="img_ad"
      />

      <Footer />
    </div>
  );
}

export default SearchPage;
