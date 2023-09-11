import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react';

const MealItemForm = ({ addToCartHandler }) => {

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [enteredAmount, setEnteredAmount] = useState('1');


  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +enteredAmount;

    addToCartHandler(enteredAmountNumber)
  }

  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          width: '100%',
          height: '16vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: matchesSm ? 'flex-end' : 'center',
          flexDirection: 'column'
        }}
      >
        <TextField
          label='Amount'
          sx={{
            width: matchesSm ? '60%' : '80%',
            my: 2,
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#5158bb",
              }
            },
            "& .MuiInputLabel-root": {
              color: '#5158bb'
            },
            "& .MuiOutlinedInput-input": {
              color: '#5158bb',
              borderColor:'#5158bb',
              fontWeight: 'bolder',
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: '#5158bb'
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: "#5158bb",
              }
            },
          }}
          value={enteredAmount}
          onChange={(e) => setEnteredAmount(e.target.value)}
        />
        <Button
          variant='contained'
          sx={{
            width: matchesSm ? '60%' : '80%',
            fontWeight: 'bolder',
            backgroundColor: '#5158bb',
            color: '#f26df9',
            ':hover': {
              backgroundColor: '#02394a',
              // color:'#5158bb',
            }
          }}
          type='submit'
        >
          Add
        </Button>

      </Box>
    </form>
  )
}

export default MealItemForm