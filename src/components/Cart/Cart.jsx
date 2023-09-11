import { Button, Card, Grid, Modal, Typography, useMediaQuery, useTheme } from '@mui/material'
import CartItem from './CartItem'
import { useContext } from 'react';
import cartContext from '../../store/cart-context';

const Cart = ({ cartCloseHandler, open }) => {

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const { items, totalAmount, addItemToCart, removeItemFromCart } = useContext(cartContext);
  const cartTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemAddHandler = (item) => {
    addItemToCart({
      ...item, amount: 1
    })
  }
  const cartItemRemoveHandler = (id) => {
    removeItemFromCart(id)
  }

  return (
    <Modal
      open={open}
      onClose={cartCloseHandler}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
        <Card
          sx={{
            padding: '20px',
            width: '75%',
            borderRadius: '8px',
            backgroundColor: '#eb4b98',
            color: '#043565',
          }}
        >
          <ul
            style={{
              margin: 0,
              padding: 0
            }}
          >
            {
              items.map((item) => (
                <CartItem
                  key={item.id}
                  amount={item.amount}
                  name={item.name}
                  price={item.price}
                  cartItemAddHandler={cartItemAddHandler.bind(null, item)}
                  cartItemRemoveHandler={cartItemRemoveHandler.bind(null, item.id)}
                />
              ))
            }

          </ul>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '12px'
            }}
          >
            <Typography variant={matchesSm ? 'h4' : 'h3'}> Total Amount </Typography>
            <Typography variant={matchesSm ? 'h4' : 'h3'}> {cartTotalAmount} </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}>
            <Button
              sx={{
                borderRadius: '10px',
                fontWeight: 'bold',
                backgroundColor: '#5158bb',
                color: '#f26df9',
                ':hover': {
                  backgroundColor: '#02394a',
                }
              }}
              variant='outlined'
              onClick={cartCloseHandler}
            >
              Close
            </Button>
            {
              hasItems &&
              <Button
                sx={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  mr: 1,
                  backgroundColor: '#5158bb',
                  color: '#f26df9',
                  ':hover': {
                    backgroundColor: '#02394a',
                  }
                }}
                variant='outlined'
                onClick={cartCloseHandler}
              > Order </Button>
            }
          </div>
        </Card>
    </Modal>
  )
}

export default Cart