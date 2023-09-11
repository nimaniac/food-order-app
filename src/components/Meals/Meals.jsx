import { Box, Card, Chip, Divider, Paper } from '@mui/material'
import React from 'react'
import MealItem from './MealItem'
import './Meals.module.css'
import { mealsList } from '../../data'
import classes from './Meals.module.css'

const Meals = () => {

    return (
        <section>

            <div className={classes.container} >
                <Divider
                    textAlign='center'
                    sx={{
                        mt: 2,
                        '&::before, &::after': {
                            border: '1px solid #eb4b98',
                            width: '15vw'
                        }
                    }}
                >
                    <Chip
                        label='list of foods'
                        variant='outlined'
                        sx={{
                            backgroundColor: '#eb4b98',
                            color: '#043565',
                            my: 2,
                            width: '200px',
                            height: '60px',
                            fontWeight: 'bolder',
                            fontSize: '20px',
                            borderRadius: '16px',
                            border: '1px solid #5158bb'
                        }}
                    />
                </Divider>

                <div className={classes.wrapper}>

                    <Paper
                        sx={{
                            backgroundColor: '#eb4b98',
                            color: '#043565',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px'
                        }}
                        elevation={24}
                    >
                        <ul className={classes.ul}>
                            {
                                mealsList.map((meal) => (
                                    <MealItem
                                        key={meal.id}
                                        id={meal.id}
                                        name={meal.name}
                                        desc={meal.desc}
                                        price={meal.price}
                                    />
                                ))
                            }
                        </ul>
                    </Paper>
                </div>

            </div>

        </section>
    )
}

export default Meals