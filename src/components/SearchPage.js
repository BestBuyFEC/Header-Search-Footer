import React from 'react'
import Header from './Header'

function SearchPage(searchData) {
    let searchD = searchData[0]
    console.log(searchD)
    return (
    <div>SearchPage
        <Header />
        {/* {searchD.map((elem) => ( 
       <h1>{elem.product_name}</h1>
    ))}  */}
    <img src="https://tpc.googlesyndication.com/simgad/16755221423212752458" border="0" width="970" height="33" alt="" class="img_ad"/>
        <div class="
				lv
				breadcrumb-and-title
			"><div><div id="skiptocontent"><a href="#main-results" class="skip-link sr-only sr-only-focusable">skip to results</a><a href="#main-filters" class="skip-link sr-only sr-only-focusable">skip to filters</a></div></div><div class="title-wrapper title"><span>Results for </span><span><span><h1 class="search-title">"lego super mario nintendo"</h1></span>.</span></div></div>

    {/* <h1> {searchD.product_name} </h1> */}
    </div>
  )
}

export default SearchPage