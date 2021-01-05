import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Nav from './components/Nav'
import './App.css'

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(resp => setProducts(resp.data))
        .catch(err => console.err(err));
  }, []);

  const handleAddToCart = (id) => {

      const index = cartItems.findIndex(item => item.id === id);
      // checking if item already exists in the cart
      if (index > -1) {
        const cartCopy = [...cartItems]
        cartCopy[index].quantity ++; // if exists, increment its quantity
        setCartItems(cartCopy);
      } else { 
        const product = products.find(item => item.id === id);
        const newCartItem = {...product, quantity: 1};
        setCartItems([...cartItems, newCartItem]);
      }
  };

  return (
    <div className="App">
      <Router>
        <Nav cartSize = {cartItems.length} />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route 
            exact path = "/shop" 
            render = {() => 
                <Shop 
                  products = {products}
                  handleAddToCart = {handleAddToCart} />
              }
            />
          <Route exact path = "/shop/:id" component = {Product}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
