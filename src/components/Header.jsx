import { ShoppingCartOutlined } from '@mui/icons-material'
import { Badge, Button, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { buttonStyles } from '../mui-styles'
import classes from './Header.module.css';
import { useContext } from 'react';
import cartContext from '../store/cart-context';

const Header = ({ cartOpenHandler }) => {

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));


    //badge content
    const { items } = useContext(cartContext);
    const numberOfCartItems = items.reduce((curValue, item) => {
        return curValue + item.amount
    }, 0);

    return (

        <div className={classes.container} >
            <div className={classes.wrapper} >
                <h1
                    style={{
                        fontSize: matchesSm && '24px',
                        fontWeight: 'bolder'
                    }}
                >
                    My Restaurant
                </h1>
                <Button variant='contained' size='large'
                    sx={{
                        ...buttonStyles,
                        width: matchesSm ? '170px' : '200px',
                        // ':hover':{
                        //     color:'#f26df9'
                        // }
                    }}
                    endIcon={
                        <Badge
                        sx={{
                            '& .MuiBadge-badge':{
                                fontSize:'18px',
                                fontWeight:'bold',
                                // backgroundColor:'#8447ff',
                                m:-0.4,
                            }
                        }}
                            showZero
                            max={99}
                            overlap='circular'
                            badgeContent={numberOfCartItems}
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    }
                    elevation={24}
                    onClick={cartOpenHandler}
                >
                    Your Cart
                </Button>
            </div>
        </div >

    )
}

export default Header