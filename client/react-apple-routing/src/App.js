import "./App.css";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Header from "./components/Header.js";

import Footer from "./components/Footer";
import Home from "./Home";
import Iphone from "./Pages/iphones/Iphone";
// import { Router } from "react-router-dom/dist/umd/react-router-dom.development";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Four04 from "./Pages/Four04/Four04";
import EachProductPage from "./Pages/eachProduct/EachProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:urLink" element={<EachProductPage />} />
          <Route path="*" element={<Four04 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
