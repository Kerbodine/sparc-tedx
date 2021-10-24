import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Talks from "./components/Talks";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="App mb-32">
      {showBanner ? <Banner setShowBanner={setShowBanner} /> : null}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
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
    </div>
  );
}

export default App;
