import React, { useState } from "react";
import List from "./List";


function Search(searchData) {
   console.log(searchData);
  const [searchString, setSearchString] = useState("");
  const handleGetSearch = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchString(lowerCase);
  
  
  };



  return (
    <div className="search-bar">
      <div className="appContainer">
        <form className="sb-input-field" onSubmit={handleGetSearch}>
          <input
            type="text"
            id="gh-search-input"
            className="search-input"
            name="st"
            maxLength="90"
            placeholder="What can we help you find today?"
            autoComplete="off"
            aria-label="Type to search. Navigate forward to hear suggestions"
            // value={searchString}
            autoCorrect="off"
            autocapitolize="off"
            spellCheck="false"
            aria-controls="suggestViewClientComponent"
            // onChange={handleGetSearch}
          />

          <button
            id="header-clear-search-icon"
            className="clear-search-icon hidden"
            aria-label="Clear search text"
          >
            <span className="header-close-icon" aria-hidden="true">
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 100 100"
                width="20"
                height="20"
                fill="#0046be"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M24.8 23.47a.98.98 0 1 1-1.38 1.38l-7.33-7.33-7.37 7.37a.98.98 0 1 1-1.39-1.38l7.38-7.38L7.37 8.8a.98.98 0 1 1 1.39-1.38l7.33 7.33 7.37-7.37a.98.98 0 1 1 1.38 1.38l-7.37 7.37 7.33 7.34z"></path>
                </svg>
              </svg>
            </span>
          </button>
          <button
            type="submit"
            className="header-search-button"
            title="submit search"
            aria-label="submit search"
            // onClick={}
          >
            <span class="header-search-icon" aria-hidden="true">
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 100 100"
                width="22"
                height="22"
                fill="#0046be"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="m28.15 26.7-7.03-7.02a9.93 9.93 0 1 0-17.6-6.29 9.93 9.93 0 0 0 16.22 7.67l7.03 7.03a.97.97 0 0 0 1.38 0c.38-.38.38-1 0-1.38zM5.48 13.4a7.98 7.98 0 1 1 15.95.02 7.98 7.98 0 0 1-15.95-.02z"></path>
                </svg>
              </svg>
            </span>
          </button>

          <input type="hidden" value="UTF-8" name="_dyncharset" />
          <input
            type="hidden"
            value=""
            id="search-session-id"
            name="_dynSessConf"
          />
          <input type="hidden" value="pcat17071" name="id" />
          <input type="hidden" value="page" name="type" />
          <input type="hidden" value="Global" name="sc" />
          <input type="hidden" value="1" name="cp" />
          <input type="hidden" value="" name="nrp" />
          <input type="hidden" value="" name="sp" />
          <input type="hidden" value="" name="qp" class="header-search-qp" />
          <input type="hidden" value="n" name="list" />
          <input type="hidden" value="true" name="af" />
          <input type="hidden" value="y" name="iht" />
          <input type="hidden" value="All Categories" name="usc" />
          <input type="hidden" value="960" name="ks" />
          <input type="hidden" id="keys" value="keys" name="keys" />
        </form>
      </div>
    </div>
  );
}

export default Search;
