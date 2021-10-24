import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="App">
      {showBanner ? <Banner setShowBanner={setShowBanner} /> : null}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
