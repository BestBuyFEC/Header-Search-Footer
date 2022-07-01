import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";

function SearchPage({ searchData }) {
  //   let searchD = searchData[0];
  //   console.log(searchD);

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
      <div className="search-pg">
      <div class="col-xs-3 facets-column">
        <div class="sticky-container lv">
          <div>
            <div data-shop-search-query-builder-v1="no-content">No content</div>
          </div>
          <div class="component-facets">
            <div class="app-container lv">
              <div id="main-filters" class="facet-list-container">
                <div role="heading" aria-level="2" class="sr-only">
                  Categories &amp; Filters
                </div>
                <div class="get-it-fast-together">
                  <div class="get-it-fast facet-section">
                    <div class="facet-no-border-bottom">
                      <h3 class="facet-title">Get it fast</h3>
                    </div>
                  </div>
                  <div class="facet-section">
                    <div class="lv facet-no-delivery-facet-shown-padding pick-up-today-facet">
                      <fieldset class="pick-up-today">
                        <legend class="get-it-fast-subheading">
                          <strong>Store Pickup</strong>
                          <span class="pick-up-at"> </span>
                          <span>
                            <button
                              class="c-button-link store-name-link"
                              type="button"
                              data-cy="store-name-link"
                            >
                              Killeen and nearby stores
                            </button>
                          </span>
                        </legend>
                        <div class="facet-option-list-item">
                          <input
                            type="checkbox"
                            class="c-checkbox-input appearance-none border-25 rounded-25"
                            id="store-pickup-pickuptoday"
                            disabled=""
                            data-cy="store-pickup-pickuptoday"
                            aria-label="pickUpToday"
                          />
                          Same-day pickup
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div class="facet-section">
                    <div class="lv facet-no-delivery-facet-shown-padding pick-up-today-facet">
                      <fieldset class="pick-up-today">
                        <legend class="get-it-fast-subheading">
                          <strong>Shipping</strong>
                          <span class="pick-up-at"> </span>
                          <button
                            class="c-button-link store-name-link"
                            type="button"
                            data-cy="store-name-link"
                          >
                            76540
                          </button>
                        </legend>
                        <div class="facet-option-list-item">
                          <input
                            type="checkbox"
                            class="c-checkbox-input appearance-none border-25 rounded-25"
                            id="shipping-samedayshipping"
                            disabled=""
                            data-cy="shipping-samedayshipping"
                            aria-label="sameDayShipping"
                          />
                          Same-day shipping
                          <div role="presentation" class="same-day-modal-icon">
                            <div class="c-form-label-tooltip">
                              <button
                                aria-label="Same-day shipping info"
                                class="c-info-i  "
                                type="button"
                              >
                                <svg aria-hidden="true" viewBox="0 0 32 32">
                                  <path
                                    class="c-info-i-circle"
                                    d="M26.26,5.74 L26.26,5.74 C20.60,0.086 11.4,0.086 5.74,5.74 C0.086,11.4 0.086,20.60 5.74,26.26 C11.4,31.91 20.60,31.91 26.26,26.26 C31.91,20.6 31.91,11.4 26.26,5.74 Z"
                                  ></path>
                                  <g
                                    class="c-info-i-text"
                                    transform="translate(13, 5)"
                                  >
                                    <path d="M3,0.23 C1.47,0.23 0.29,1.44 0.29,2.82 C0.29,4.24 1.47,5.42 3,5.42 C4.5,5.42 5.71,4.29 5.71,2.82 C5.71,1.38 4.5,0.23 3,0.23 Z"></path>
                                    <rect
                                      height="14.36"
                                      width="4.73"
                                      x="0.63"
                                      y="7.41"
                                    ></rect>
                                  </g>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="bordered-section">
                  <div class="facet-section">
                    <section class="lv facet">
                      <fieldset name="Availability">
                        <legend class="facet-legend">
                          <strong class="facet-title default">
                            Availability
                          </strong>
                        </legend>
                        <ul class="facet-option-list">
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="soldout_facet-Exclude-Out-of-Stock-Items-0"
                              disabled=""
                              count="0"
                              aria-label="Exclude Out of Stock Items"
                            />
                            <div>
                              <span aria-hidden="true">
                                Exclude Out of Stock Items
                              </span>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </section>
                  </div>
                  <div class="facet-section facet-section-category">
                    <section class="lv facet">
                      <fieldset name="Category">
                        <legend class="facet-legend">
                          <strong class="facet-title brand-primary">
                            Category
                          </strong>
                        </legend>
                        <ul class="facet-option-list">
                          <li class="facet-option-list-item">
                            <div class="facet-option-container">
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=category_facet%3DBuilding%20Sets%20%26%20Blocks~pcmcat250300050002&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                class="facet-category"
                              >
                                Building Sets &amp; Blocks
                              </a>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </section>
                  </div>
                  <div class="facet-section">
                    <section class="lv facet">
                      <fieldset name="Current Deals">
                        <legend class="facet-legend">
                          <strong class="facet-title default">
                            Current Deals
                          </strong>
                        </legend>
                        <ul class="facet-option-list">
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="currentoffers_facet-Free-Shipping-Eligible-0"
                              count="2"
                              aria-label="Free Shipping Eligible, 2 results"
                            />
                            <div>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=currentoffers_facet%3DCurrent%20Deals~Free%20Shipping%20Eligible&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                Free Shipping Eligible
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </section>
                    <section class="lv facet">
                      <fieldset name="Customer Rating">
                        <legend class="facet-legend">
                          <strong class="facet-title default">
                            Customer Rating
                          </strong>
                          <div
                            role="presentation"
                            class="facet-description-modal-icon"
                          >
                            <div class="c-form-label-tooltip facet-icon-stack">
                              <button
                                aria-label="Customer Rating info"
                                class="c-info-i  "
                                type="button"
                                data-track="facet-description-Customer Rating"
                              >
                                <svg aria-hidden="true" viewBox="0 0 32 32">
                                  <path
                                    class="c-info-i-circle"
                                    d="M26.26,5.74 L26.26,5.74 C20.60,0.086 11.4,0.086 5.74,5.74 C0.086,11.4 0.086,20.60 5.74,26.26 C11.4,31.91 20.60,31.91 26.26,26.26 C31.91,20.6 31.91,11.4 26.26,5.74 Z"
                                  ></path>
                                  <g
                                    class="c-info-i-text"
                                    transform="translate(13, 5)"
                                  >
                                    <path d="M3,0.23 C1.47,0.23 0.29,1.44 0.29,2.82 C0.29,4.24 1.47,5.42 3,5.42 C4.5,5.42 5.71,4.29 5.71,2.82 C5.71,1.38 4.5,0.23 3,0.23 Z"></path>
                                    <rect
                                      height="14.36"
                                      width="4.73"
                                      x="0.63"
                                      y="7.41"
                                    ></rect>
                                  </g>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </legend>
                        <ul class="facet-option-list">
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="customerreviews_facet-Top-Rated-0"
                              count="2"
                              aria-label="Top-Rated, 2 results"
                            />
                            <div>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=customerreviews_facet%3DCustomer%20Rating~Top-Rated&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                Top-Rated
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="customerreviews_facet-4-&amp;-Up-1"
                              count="2"
                              aria-label="Rating 4 &amp; Up out of 5 stars, 2 results"
                            />
                            <div>
                              <i
                                aria-hidden="true"
                                class="c-stars-wrapper c-stars-eds-mini "
                              >
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                              </i>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=customerreviews_facet%3DCustomer%20Rating~4%20%26%20Up&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                4 &amp; Up
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="customerreviews_facet-3-&amp;-Up-2"
                              count="2"
                              aria-label="Rating 3 &amp; Up out of 5 stars, 2 results"
                            />
                            <div>
                              <i
                                aria-hidden="true"
                                class="c-stars-wrapper c-stars-eds-mini "
                              >
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                              </i>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=customerreviews_facet%3DCustomer%20Rating~3%20%26%20Up&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                3 &amp; Up
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="customerreviews_facet-2-&amp;-Up-3"
                              count="2"
                              aria-label="Rating 2 &amp; Up out of 5 stars, 2 results"
                            />
                            <div>
                              <i
                                aria-hidden="true"
                                class="c-stars-wrapper c-stars-eds-mini "
                              >
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                              </i>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=customerreviews_facet%3DCustomer%20Rating~2%20%26%20Up&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                2 &amp; Up
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="customerreviews_facet-1-&amp;-Up-4"
                              count="2"
                              aria-label="Rating 1 &amp; Up out of 5 stars, 2 results"
                            />
                            <div>
                              <i
                                aria-hidden="true"
                                class="c-stars-wrapper c-stars-eds-mini "
                              >
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                                <span class="c-stars-container"></span>
                              </i>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=customerreviews_facet%3DCustomer%20Rating~1%20%26%20Up&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                1 &amp; Up
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </section>
                    <section class="lv facet">
                      <fieldset name="Franchise">
                        <legend class="facet-legend">
                          <strong class="facet-title default">Franchise</strong>
                        </legend>
                        <ul class="facet-option-list">
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="brandcharacter_facet-LEGO-0"
                              count="2"
                              aria-label="LEGO, 2 results"
                            />
                            <div>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=brandcharacter_facet%3DFranchise~LEGO&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                LEGO
                              </a>
                              <small
                                aria-hidden="true"
                                class="sku-count"
                              ></small>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </section>
                    <section class="lv facet">
                      <fieldset name="Price">
                        <legend class="facet-legend">
                          <strong class="facet-title default">Price</strong>
                        </legend>
                        <div class="range">
                          <div class="range-inputs">
                            <input
                              type="text"
                              class="tb-input range-control form-control"
                              id="min-currentprice_facet-input"
                              placeholder="min."
                              maxlength="12"
                              autocomplete="off"
                              value=""
                              aria-label="Minimum Price"
                            />
                            <span class="range-to">to</span>
                            <input
                              type="text"
                              class="tb-input range-control form-control"
                              id="max-currentprice_facet-input"
                              placeholder="max."
                              maxlength="12"
                              autocomplete="off"
                              value=""
                              aria-label="Maximum Price"
                            />
                          </div>
                          <button
                            class="c-button-link range-submit"
                            disabled=""
                            type="button"
                            aria-label="Apply Price Range"
                          >
                            <svg
                              aria-hidden="true"
                              role="img"
                              viewBox="0 0 100 100"
                              class="svg-size-s"
                            >
                              <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11.38 29.32a.98.98 0 0 1-.78-1.57L19.46 16 10.6 4.25a.98.98 0 0 1 1.57-1.17l9.3 12.33c.26.35.26.83 0 1.18l-9.3 12.34a.98.98 0 0 1-.79.39"></path>
                              </svg>
                            </svg>
                          </button>
                        </div>
                        <ul class="facet-option-list">
                          <li class="facet-option-list-item">
                            <input
                              type="checkbox"
                              class="c-checkbox-input appearance-none border-25 rounded-25"
                              id="currentprice_facet-$25-$49.99-0"
                              count="2"
                              aria-label="$25 - $49.99, 2 results"
                            />
                            <div>
                              <a
                                href="/site/searchpage.jsp?id=pcat17071&amp;qp=currentprice_facet%3DPrice~%2425%20-%20%2449.99&amp;st=lego+orchid+10311+plant+decor+toy+building+kit+(608+pieces)"
                                aria-hidden="true"
                                tabindex="-1"
                              >
                                $25 - $49.99
                              </a>
                              <small aria-hidden="true" class="sku-count">
                                ()
                              </small>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
              <div className="search-card-container">
        <div class="banner-wrapper top-border">
          <div class="banner-middle-column">
            <span
              class="item-count"
              tabindex="-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {searchData.length} items
            </span>
          </div>
          <div class="banner-right-column v-small">
            <label for="sort-by-select" class="sort-by-label">
              <span class="sort-by-title">Sort By: </span>
              <div class="tb-select-wrapper sort-dropdown">
                <select
                  autocomplete="off"
                  class="tb-select"
                  id="sort-by-select"
                >
                  <option
                    selected=""
                    value="Best-Match"
                    data-track="Sort:Best Match"
                  >
                    Best Match
                  </option>
                  <option value="Best-Selling" data-track="Sort:Best Selling">
                    Best Selling
                  </option>
                  <option
                    value="Price-Low-To-High"
                    data-track="Sort:Price Low to High"
                  >
                    Price Low to High
                  </option>
                  <option
                    value="Price-High-To-Low"
                    data-track="Sort:Price High to Low"
                  >
                    Price High to Low
                  </option>
                  <option
                    value="Customer-Rating"
                    data-track="Sort:Customer Rating"
                  >
                    Customer Rating
                  </option>
                  <option value="New-Arrivals" data-track="Sort:New Arrivals">
                    New Arrivals
                  </option>
                  <option value="Brand-A-Z" data-track="Sort:Brand A-Z">
                    Brand A-Z
                  </option>
                  <option value="Brand-Z-A" data-track="Sort:Brand Z-A">
                    Brand Z-A
                  </option>
                </select>
                <svg
                  aria-hidden="true"
                  role="img"
                  viewBox="0 0 100 100"
                  className="tb-select-dropdown-arrow"
                >
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.05 21.65a.97.97 0 0 1-.6-.2l-12.33-9.3A.98.98 0 0 1 4.3 10.6l11.75 8.85 11.74-8.85a.98.98 0 0 1 1.18 1.56l-12.34 9.3a.97.97 0 0 1-.58.2"></path>
                  </svg>
                </svg>
              </div>
            </label>
          </div>
        </div>
        <div>
          {searchData.map((data) => (
            <SearchItem
              id={data.id}
              product_id={data.product_id}
              image_url={data.image_url}
              product_name={data.product_name}
              model={data.model}
              brand={data.brand}
              sku={data.sku}
              price={data.price}
              number_of_items={searchData.length}
              release_date={data.release_date}
            />
          ))}
        </div>
        </div>
        
        </div>
        <Footer />
    </div>
  );
}

export default SearchPage;
