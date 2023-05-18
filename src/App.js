import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import NFTScreen01 from './components/NFTScreen01';
import NFTScreen06 from './components/NFTScreen06';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/page01">Page 01</Link>
            </li>
            <li>
              <Link to="/page06">Page 06</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Switch>
            <Route path="/page01">
              <NFTScreen01 />
            </Route>
            <Route path="/page06">
              <NFTScreen06 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
