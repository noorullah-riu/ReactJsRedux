//import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Category from "./Pages/Category";
import Detail from "./Pages/ProductDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AppProvider } from "../src/Context/DataProvider";
function App() {
  return (
      <AppProvider> 
    <div className="wrapper-wide">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/About" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Category" exact component={Category} />
          <Route path="/Detail" exact component={Detail} /> 
        </Switch>

          <Footer /> 
      </Router>
    </div>
     </AppProvider> 
  );
}

export default App;
