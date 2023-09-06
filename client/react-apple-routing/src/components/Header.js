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
                <a class="nav-link js-scroll-trigger" href="/mac/">
                  Mac
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link js-scroll-trigger" to="/iphone/">
                  iphone
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#">
                  ipad
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#">
                  watch
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#">
                  tv
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#">
                  Music
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/search/">
                  <img src={sreachsm} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cartsm} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
