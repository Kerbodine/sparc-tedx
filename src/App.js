import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Talks from "./components/Talks";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="App">
      {showBanner ? <Banner setShowBanner={setShowBanner} /> : null}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home banner={showBanner} />
          </Route>
          <Route exact path="/speakers">
            <Speakers />
          </Route>
          <Route exact path="/talks">
            <Talks />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
