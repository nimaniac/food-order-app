import { Divider, Typography } from '@mui/material'
import MealItemForm from './MealItemForm'
import './MealItem.module.css'
import { useContext } from 'react'
import cartContext from '../../store/cart-context'

const MealItem = ({ name, price, desc, id }) => {

    const { addItemToCart } = useContext(cartContext);

    const mealPrice = `$${price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        addItemToCart({
            id: id,
            name: name,
            amount: amount,
            price: price
        })
    }

    return (
        <>
            <li className='mealItem'
                style={{
                    width: '100%',
                    height: '24%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    padding: '0 20px'
                }}
            >
                <div>
                    <Typography variant='h4'> {name} </Typography>
                    <Typography variant='body1'> {desc} </Typography>
                    <Typography variant='h4' > {mealPrice} </Typography>
                </div>
                <div>
                    <MealItemForm
                        addToCartHandler={addToCartHandler}
                        id={id}
                    />
                </div>
            </li>
            <Divider
                sx={{
                    border: '1.5px solid #5158bb'
                }}
                variant='middle'
            />
        </>
    )
}

export default MealItem