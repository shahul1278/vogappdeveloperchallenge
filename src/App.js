import logo from "./logo.svg";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import University from "./Universites/University";
import Postalsearch from "./PostalCode/Postalsearch";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/University" component={University}></Route>
          <Route exact path="/postal" component={Postalsearch}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
