import logosm from "../commonResource/images/icons/logo-sm.png";
import sreachsm from "../commonResource/images/icons/search-icon-sm.png";
import cartsm from "../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="nav-wrapper fixed-top">
      <div class="container">
        <nav class="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link class="navbar-brand mx-auto" to="/">
            <img src={logosm} />
          </Link>

          <div class="navbar-collapse collapse">
            <ul class="navbar-nav nav-justified w-100 nav-fill">
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/mac/">
                  Mac
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/iphone/">
                  iphone
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/ipad">
                  ipad
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/watch">
                  watch
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/tv">
                  tv
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/music">
                  Music
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/search/">
                  <img src={sreachsm} />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/cart/">
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
