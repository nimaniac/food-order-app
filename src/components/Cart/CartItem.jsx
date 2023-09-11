import { Button, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const CartItem = ({ price, name, amount, cartItemRemoveHandler, cartItemAddHandler }) => {

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    const cartPrice = `$${price.toFixed(2)}`;


    return (
        <>
            <li
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100px',
                }}
            >
                <div>
                    <Typography variant='h4'> {name} </Typography>
                    <div
                        style={{
                            width: '120px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant='h6'> {cartPrice} </Typography>
                        <Typography variant='h6'
                            sx={{
                                width: '35px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                            x{amount} </Typography>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: matchesSm ? 'column' : 'row',
                        height: '12vh'
                    }}
                >
                    <Button variant='outlined'
                        sx={{
                            mr: matchesSm ? 0 : 2,
                            mt: matchesSm ? 1 : 0,
                            backgroundColor: '#5158bb',
                            color: '#f26df9',
                            ':hover': {
                                backgroundColor: '#02394a',
                            }
                        }}
                        onClick={cartItemRemoveHandler}
                    > − </Button>
                    <Button variant='outlined'
                        sx={{
                            mr: matchesSm ? 0 : 2,
                            mt: matchesSm ? 1 : 0,
                            backgroundColor: '#5158bb',
                            color: '#f26df9',
                            ':hover': {
                                backgroundColor: '#02394a',
                            }
                        }}
                        onClick={cartItemAddHandler}
                    > + </Button>
                </div>
            </li>
            <Divider />
        </>
    )
}

export default CartItem