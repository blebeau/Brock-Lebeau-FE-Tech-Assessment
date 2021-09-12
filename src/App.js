import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Header from './components/navbar';
import { Collapse, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([])
  const [openCart, setOpenCart] = useState(false);
  const onAdd = (prod) => {
    let ids = [];
    // Collects ids to compare so the ammount of an already added item is
    // increased rather than added as a 'new' item
    const itemIds = item.forEach((i) => {
      ids.push(i._id)
    })
    // Checks the items in the cart and either adds the item
    // or increments the quanitiy of the item
    const exists = item.find(x => cart.includes(x._id))
    if (exists) {
      // const count =cart.filter(item => item._id === ).length;
      setCart(cart.map(x => x._id === cart._id ?
        { ...exists, qty: exists.qty + 1 } : x)
      )
    } else {
      setCart([...cart, prod])
    }
  }
  // Fetches the data from the API
  useEffect(() => {
    const url = 'https://main-api.fulhaus.com/fulhaus-tech-test/get-products';
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setItem(json);
        setLoading(false);
      } catch (err) {
        console.log('err', err)
      }
    }
  }, [])

  const showCart = openCart ? 'visible' : 'hidden';

  return (
    <div className='main'>
      {/* The navebar component */}
      <Header />
      <Button onClick={() => setOpenCart(!openCart)} />
      <div style={{
        height: '50vh',
        width: '30vw',
        position: 'fixed',
        zIndex: 5,
        marginLeft: '70vw',
        visibility: showCart,
        backgroundColor: 'aliceblue'
      }}>
        {/* Default cart status as empty */}
        <div>{
          cart.length === 0 && <div>Cart Is Empty</div>
        }</div>
        {/* Maps the cart item information to the side bar */}
        {
          cart && (
            cart.map((prod, index) => (
              <div key={index} >
                <img className='cartImage' key={index} src={prod.imageURLs[0]} alt="product">
                </img>
                <p>{prod.vendorProductName}</p>
                <p>{prod.vendorName}</p>
                <p>${prod.MSRP}</p>
              </div>

            )
            )
          )}
      </div>
      <img alt='background' src={logo} />
      <div class="col text-center">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant='dark'
          className='shopButton'
        >
          Shop
        </Button>
      </div>
      {/* Maps the images to the drop down. First confirms the items are filled
      then maps through them and displays an image for each
      */}
      <Collapse in={open}>
        <div className="flex-container wrap">
          {/* <Carousel>
            <Carousel.item> */}
          {
            item && (
              item.map((prod, index) => (
                // <div class='image'>
                <img className='productImage' key={index} src={prod.imageURLs[0]} alt="thing"
                  onClick={() => {
                    onAdd(prod)
                  }}>
                </img>
              )
              )
            )}
          {console.log('cart', cart)}
        </div>
      </Collapse>
    </div>
  );
}

export default App;
