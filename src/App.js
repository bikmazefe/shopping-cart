import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemList from './ItemList';
import Home from './components/Home'
import Shop from './components/Shop'
import Nav from './components/Nav'
import Cart from './components/Cart'
import './style/App.scss'


function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      const data = ItemList;
      setProducts(data);
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

  const handleRemoveFromCart = (id) => {
    const cartCopy = [...cartItems];
    const index = cartCopy.findIndex(item => item.id === id);
    cartCopy.splice(index, 1)
    setCartItems(cartCopy)
  }

  const handleQuantityChange = (action, id) => {
    const cartCopy = [...cartItems];
    const index = cartCopy.findIndex(item => item.id === id);
    if (action ===  "increment") {
      cartCopy[index].quantity++;
    } else  {
      cartCopy[index].quantity--;
    }
    setCartItems(cartCopy);
  }

  return (
    <div className="App">
      <Router basename = "/">
        <Nav cartSize = {cartItems.length} />
        <Switch>
          <Route exact path = "/shopping-cart/" component = {Home}/>
          <Route 
            exact path = "/shopping-cart/shop" 
            render = {() => 
                <Shop 
                  products = {products}
                  handleAddToCart = {handleAddToCart} />
              }
            />
          <Route 
            exact path = "/shopping-cart/cart"
            render = {() => 
                <Cart 
                  cartItems = {cartItems} 
                  handleRemoveFromCart = {handleRemoveFromCart}
                  handleQuantityChange = {handleQuantityChange}/>
              }
            /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
