import React, { useState } from 'react'
import Header from './components/Header'
import Carousel from './Carousel'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {

  const [open, setOpen] = useState(false);

  const cartOpenHandler = () => {
    setOpen(true)
  }

  const cartCloseHandler = () => {
    setOpen(false)
  }

  return (
    <CartProvider>
      <Cart
        open={open}
        cartCloseHandler={cartCloseHandler}
      />
      <header>
        <Header
        cartOpenHandler={cartOpenHandler}
        />
        <Carousel />
      </header>
      <main>
        <Meals />
      </main>
    </CartProvider>

  )
}

export default App
