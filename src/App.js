import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'

function App() {

  const [cartItems, setCartItems] = useState([]);
  


  return (
    <div className="App">
      <Router>
        <Nav cartSize = {cartItems.length} />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/shop" component = {Shop}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
