import React from 'react'

function Menu() {
  return (
    <nav className="hamburger-menu">
              <button
                className="c-button-unstyled hamburger-menu-button"
                id="menu-button"
                type="button"
                aria-label="Menu"
                aria-expanded="false"
                aria-controls="flyout-container"
                data-t="hamburger-navigation-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="white"
                >
                  <path d="M19.25 7.5H4.75c-.41 0-.75-.34-.75-.75S4.34 6 4.75 6h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z"></path>
                </svg>
                Menu
              </button>
            </nav>
  )
}

export default Menu