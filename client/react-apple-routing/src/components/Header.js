import logosm from "../commonResource/images/icons/logo-sm.png";
import sreachsm from "../commonResource/images/icons/search-icon-sm.png";
import cartsm from "../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const clickOutisde = () => {

  //   else {
  //     toggleNav();
  //   }
  // };
  // const body = document.getElementsByTagName("body");
  // console.log(body[0]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    if (isNavOpen) {
      toggleNav();
    }
  };

  if (!isNavOpen) {
    document.body.addEventListener("click", () => setIsNavOpen(false));
  }

  return (
    <div class="nav-wrapper fixed-top">
      <div class="container">
        <nav class="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            // data-toggle="collapse"
            // target="#collapsibleNavbar"
            onClick={toggleNav}
          >
            ☰
          </button>
          <Link class="navbar-brand mx-auto" to="/" onClick={handleLinkClick}>
            <img src={logosm} alt={""} />
          </Link>

          <div
            class={`navbar-collapse collapse ${isNavOpen ? "show" : ""}`}
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav nav-justified w-100 nav-fill">
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/mac/"
                  onClick={handleLinkClick}
                >
                  Mac
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/iphone/"
                  onClick={handleLinkClick}
                >
                  iphone
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/ipad"
                  onClick={handleLinkClick}
                >
                  ipad
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/watch"
                  onClick={handleLinkClick}
                >
                  watch
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/tv"
                  onClick={handleLinkClick}
                >
                  tv
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/music"
                  onClick={handleLinkClick}
                >
                  Music
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/support"
                  onClick={handleLinkClick}
                >
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/search/"
                  onClick={handleLinkClick}
                >
                  <img src={sreachsm} />
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link js-scroll-trigger"
                  to="/cart/"
                  onClick={handleLinkClick}
                >
                  <img src={cartsm} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
