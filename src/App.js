import React from 'react';
// import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header>
        <div className='top-container'>
        <div className='top-nav'>
          <a href="https://www.bestbuy.com" title="BestBuy.com" data-lid="hdr_lgo" data-t="header-primary-logo"><svg aria-label="BestBuy.com" role="img" class="block" height="40" width="68" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 92"><path d="M127.6 66.66h31.33v25.09h-31.34l-7.8-7.34V74.06l7.81-7.4z" fill="#fff200"></path>
          <path d="M126.03 79.19c0 .86-.69 1.55-1.55 1.55-.86 0-1.55-.69-1.55-1.55 0-.86.69-1.55 1.55-1.55.85 0 1.55.7 1.55 1.55z" fill="#1d252c"></path>
          <path d="M127.2 57.76c0-1.17.94-2.12 2.12-2.12 1.2 0 2.12.94 2.12 2.11 0 1.19-.93 2.11-2.12 2.11-1.17 0-2.12-.9-2.12-2.1zm3.96-.01c0-1.07-.78-1.85-1.84-1.85-1.05 0-1.83.79-1.83 1.86 0 1.08.81 1.84 1.83 1.84 1.04 0 1.84-.77 1.84-1.85zm-2.55-1.13h.71c.48 0 .79.21.79.64v.01c0 .33-.21.51-.51.57l.64.97h-.35l-.61-.92h-.33v.92h-.33l-.01-2.19zm.72 1.03c.31 0 .46-.12.46-.37v-.01c0-.28-.16-.37-.46-.37h-.38v.75h.38zM30.21 19.81l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.09-3.09-10.55-3.09H2.1v39.61h20.47c5.25 0 16.12-.98 16.12-11.33-.01-7.91-8.29-9.54-8.48-9.61zM14.9 10.42h4.72c1.74-.04 3.23 1.18 3.21 2.9.02 1.73-1.48 2.94-3.21 2.9H14.9v-5.8zm8.82 20.12c-.74.7-1.67 1.04-2.78 1.04H14.9v-7.11h6.03c3.28-.18 5.27 3.8 2.79 6.07zM40.39 63.65l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.1-3.09-10.55-3.09h-19.3v39.61h20.43c5.25 0 16.12-.98 16.12-11.33 0-7.91-8.28-9.53-8.47-9.61zm-15.27-9.39h4.68c1.74-.04 3.23 1.18 3.22 2.9.01 1.73-1.48 2.94-3.22 2.9h-4.68v-5.8zm8.78 20.13c-.74.7-1.67 1.04-2.78 1.04h-6v-7.11h6c3.27-.18 5.26 3.8 2.78 6.07zM71.48 31.13H52.33v-6.21h15.63v-9.06H52.33v-5.08h19.19V1.13h-32v39.61h31.96v-9.61zM104.23 1.13v9.64h10.47v29.97h12.73V10.77h10.47V1.13h-33.67z" fill="#fff"></path>
          <path d="M89.75 30.5c-2.8 2.33-8.08-.25-10.16-2.38l-7.56 7.18.48.48c6.71 6.62 20.86 8.59 27.98 2.21 5.84-4.61 6.03-14.52-.04-18.59-2.29-1.46-5.4-2.86-7.97-3.52-1.31-.3-2.64-.73-3.53-1.25-2.85-1.53-.43-4.43 2.13-4.16 2.59 0 4.17 1.16 4.99 2l7.58-7.2-.14-.16C97.4-.99 84.27-1.92 77.89 3.77c-2.9 2.51-4.35 5.47-4.35 8.85-.16 8.34 7.15 11.23 13.83 13.19 1.42.6 3.28.97 3.44 2.47-.01.87-.36 1.61-1.06 2.22zM71.52 68.52c-.19 6.29-9.33 6.29-9.52 0V44.99H49.18v22.93c-.03 9.76 8.2 17.54 17.92 17.12 9.46 0 17.12-7.66 17.12-17.12V45h-12.7v23.52zM106.13 58.47 97.73 45H84.89l14.83 25.47v14.14h12.81V70.46L127.36 45h-12.84l-8.39 13.47z" fill="#fff"></path></svg></a>
          <nav className='hamburger-menu'>
          <button className="c-button-unstyled hamburger-menu-button" id='menu-button' type="button" aria-label="Menu" aria-expanded="false" aria-controls="flyout-container" data-t="hamburger-navigation-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
              <path d="M19.25 7.5H4.75c-.41 0-.75-.34-.75-.75S4.34 6 4.75 6h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z"></path></svg>Menu</button>
          </nav>
          <div className='search-bar'>
            <div className='appContainer'>
              <form className="sb-input-field" >
                <input type="text" id="gh-search-input" class="search-input" name="st" maxlength="90" placeholder="What can we help you find today?" autocomplete="off" aria-label="Type to search. Navigate forward to hear suggestions" value="" autocorrect="off" autocapitolize="off" spellcheck="false" aria-controls="suggestViewClientComponent"/>
                  <div id="suggestViewClientComponent" >
                    <div></div>
                    </div>
                <button id="header-clear-search-icon" class="clear-search-icon hidden" aria-label="Clear search text"><span class="header-close-icon" aria-hidden="true"><svg aria-hidden="true" role="img" viewBox="0 0 100 100" width="20" height="20" fill="#0046be"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
                  <path d="M24.8 23.47a.98.98 0 1 1-1.38 1.38l-7.33-7.33-7.37 7.37a.98.98 0 1 1-1.39-1.38l7.38-7.38L7.37 8.8a.98.98 0 1 1 1.39-1.38l7.33 7.33 7.37-7.37a.98.98 0 1 1 1.38 1.38l-7.37 7.37 7.33 7.34z"></path></svg></svg></span></button>
                <button type="submit" class="header-search-button" title="submit search" aria-label="submit search"><span class="header-search-icon" aria-hidden="true"><svg aria-hidden="true" role="img" viewBox="0 0 100 100" width="22" height="22" fill="#0046be"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
                  <path d="m28.15 26.7-7.03-7.02a9.93 9.93 0 1 0-17.6-6.29 9.93 9.93 0 0 0 16.22 7.67l7.03 7.03a.97.97 0 0 0 1.38 0c.38-.38.38-1 0-1.38zM5.48 13.4a7.98 7.98 0 1 1 15.95.02 7.98 7.98 0 0 1-15.95-.02z"></path></svg></svg></span></button>
                <input type="hidden" value="UTF-8" name="_dyncharset"/>
                  <input type="hidden" value="" id="search-session-id" name="_dynSessConf"/>
                  <input type="hidden" value="pcat17071" name="id"/>
                  <input type="hidden" value="page" name="type"/>
                  <input type="hidden" value="Global" name="sc"/>
                  <input type="hidden" value="1" name="cp"/>
                  <input type="hidden" value="" name="nrp"/>
                  <input type="hidden" value="" name="sp"/>
                  <input type="hidden" value="" name="qp" class="header-search-qp"/>
                  <input type="hidden" value="n" name="list"/>
                  <input type="hidden" value="true" name="af"/>
                  <input type="hidden" value="y" name="iht"/>
                  <input type="hidden" value="All Categories" name="usc"/>
                  <input type="hidden" value="960" name="ks"/>
                  <input type="hidden" id="keys" value="keys" name="keys"/>

                  </form>
            </div>
          </div>
          <div></div>
          <div></div>

    </div>
    </div>
    <div>
      <nav>
        <div>
          <ul>

          </ul>
          <div></div>
        </div>

      </nav>
    </div>
      </header>
    </div>
    
    

  );
}

export default App;
