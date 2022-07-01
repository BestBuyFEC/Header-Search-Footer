import React from 'react'

function SearchItem({id, product_id, image_url, product_name, model, brand, sku, price, number_of_items, release_date}) {

console.log(price, number_of_items)

  return (
    <div>
     
        
        
      
      <div>
        <ol className="sku-item-list">
          <li className="sku-item">
            <div className="embedded-sku">
              <div>
                <div className="sku-list-item">
                  <div className="list-item-lv">
                    <a
                      class="image-link"
                      href="/site/lego-super-mario-nintendo-entertainment-system-71374/6434148.p?skuId=6434148"
                    >
                      <img
                        class="product-image "
                        alt = {product_name} 
                        // "- Front_Zoom"
                        src={image_url[0]}
                        srcset="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6434/6434148_sd.jpg;maxHeight=300;maxWidth=450 1.5x"
                      />
                    </a>
                    <div className="information">
                      <h4 className="sku-title">
                        <a href="/site/lego-super-mario-nintendo-entertainment-system-71374/6434148.p?skuId=6434148">
                          {product_name}
                        </a>
                      </h4>
                      <div className="variation-info">
                      <div class="sku-model"><div class="sku-attribute-title"><span class="attribute-title">Model:</span> <span class="sku-value">{model}</span></div><div class="sku-attribute-title"><span class="attribute-title">SKU:</span> <span class="sku-value">{sku}</span></div><div class="sku-attribute-title"><span class="attribute-title">Release Date:</span> <span class="sku-value">{release_date}</span></div></div>
                      <div class="ratings-reviews"><a href="/site/lego-super-mario-nintendo-entertainment-system-71374/6434148.p?skuId=6434148#tabbed-customerreviews"><div class="c-ratings-reviews flex c-ratings-reviews-small align-items-center gap-50"><p class="visually-hidden">Rating 5 out of 5 stars with 41 reviews</p><i aria-hidden="true" class="c-stars-wrapper c-stars-eds-small"><span class="c-stars-container"></span><span class="c-stars-container" ></span><span class="c-stars-container" ></span></i><span aria-hidden="true" class="c-reviews ">(41)</span></div></a></div>
                      </div>
                      <div>
                          <div className="fulfillment-container">
                            <div>Get it in 6 days</div>
                            <div className="pickup">
                                <svg></svg>
                                <div>Pickup: Order now for pickup on Thu, Jul 7 at Killeen</div>
                            </div>
                            <div className="free-shipping">
                                <svg></svg>
                                <div className="shipping">FREE Shipping</div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="price-block">
                        <div className="sku-list-item-price">
                          <div>
                            <div className="pricing-price6">
                              <div className="pricing-price">
                                <div className="pricing-price">
                                  <div class="priceView-hero-price priceView-customer-price">
                                    <span aria-hidden="true">${price}</span>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="sli-add-to-cart">
                          <div>
                            <div
                              id="fulfillment-add-to-cart-button-84332481"
                              class="_none"
                              data-version="21.0.671"
                            >
                              <div class="fulfillment-add-to-cart-button">
                                <div>
                                  <div>
                                    <button
                                      class="c-button c-button-primary c-button-sm c-button-block c-button-icon c-button-icon-leading add-to-cart-button"
                                      type="button"
                                      data-sku-id="6434148"
                                      data-button-state="ADD_TO_CART"
                                      style={{padding:'0 8px'}}
                                    >
                                      <svg className="cart-icon"
                                        aria-hidden="true"
                                        role="img"
                                        viewBox="0 0 100 100"
                                        
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 32 32"
                                        >
                                          <path d="M31.75 7.39a1.2 1.2 0 0 0-.96-.48H6.75L6 4.11a1.2 1.2 0 0 0-1.17-.9H1.21a1.2 1.2 0 1 0 0 2.41h2.7l4.35 16.24c.14.52.62.9 1.16.9h17.35a1.2 1.2 0 0 0 0-2.42H10.35l-.76-2.82h18.97a1.2 1.2 0 0 0 1.16-.9l2.24-8.18c.1-.36.02-.75-.2-1.05M13.13 23.96a2.42 2.42 0 1 0 0 4.83 2.42 2.42 0 0 0 0-4.83m10.95 0a2.42 2.42 0 1 0 0 4.83 2.42 2.42 0 0 0 0-4.83"></path>
                                        </svg>
                                      </svg>
                                      Add to Cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>    
    </div>
  )
}

export default SearchItem