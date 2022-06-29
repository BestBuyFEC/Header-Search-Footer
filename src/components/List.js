import React from "react";
import RenderList from "./RenderList";

function List(searchData) {
  console.log(searchData);
  let searchDataLoc = searchData.searchData.searchData.searchData;
  console.log(searchDataLoc);

  // function searchList () {

  //   searchDataLoc.map((elem) => {
  //     console.log(elem)
  //     return <RenderList elem={elem} key={elem.product_id} searchList={searchList}/>
  //     })
  // }
}

export default List;
