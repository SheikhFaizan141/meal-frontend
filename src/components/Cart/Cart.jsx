import { Box, Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import {  useOutletContext } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";



export default function Cart() {
  const { items, itemTotalPrice, totalPrice, tax } = useOutletContext();

  return (
    <>
      <Box className="co-cart">
        <Typography paddingBlock={2} paddingInline={2} variant="h5" color={'GrayText'}>Meals</Typography>

        <Divider light />

        <Box paddingBlock={2} paddingInline={2}>
          {
            items.map(item => <CartItem key={item.id} meal={item} />)
          }


          <Box className="co-bl-wrapper pt-1">
            <Typography className="co-bl-heading text-xl mb-1" marginBlockEnd={1} variant="h5">Bill Details</Typography>

            <Box className="co-item-total text-base mb-1">
              <Typography className="co-item-l" variant="body1">Item Total</Typography>
              <Typography className="co-item-r" variant="body1">{formatCurrency(itemTotalPrice)}</Typography>
            </Box>
          </Box>

          <Box className="co-bl-detail-wrap">
            <Box className="co-item-tax text-base mb-1">
              <p className="co-item-l">GST</p>
              <p className="co-item-r">{formatCurrency(tax)}</p>
            </Box>

          </Box>

        </Box>
        <Divider light sx={{ marginBlockEnd: '1rem' }} />

        <div className="co-b-total-wrapper">
          <Box paddingBlock={2} paddingInline={2} className="co-b-box">
            <Typography className="text-xl" fontWeight={400} variant={'h6'}>Total Amount</Typography>
            <Typography className="text-xl" variant="h6">{formatCurrency(totalPrice)}</Typography>
          </Box>
        </div>
      </Box>
    </>
  )
}


function CartItem({ meal }) {
  const { dispatch } = useOutletContext();

  function handleAdd() {

    dispatch({
      type: 'increment',
      id: meal.id
    })

  }

  function handleSub() {

    dispatch({
      type: 'decrement',
      id: meal.id
    })
  }

  return (
    <>
      <Box>
        <Stack padding={1} direction={'row'} className="co-item-wrapper">

          <Box width={'100%'} maxWidth={'50px'} sx={{ aspectRatio: 1 / 1 }} className="img-container">
            <img loading="lazy" src="/img/mark-deyoung-mjcJ0FFgdWI-unsplash.jpg" width="100" height="100" alt="" className="img" />
          </Box>

          <Box alignItems={'center'} flex={1} component={'hgroup'} className="co-item-info">
            <Typography paddingBlockEnd={1} className="co-item-name">{meal.name}</Typography >

            <Box alignItems={'center'} display={"flex"} justifyContent={"space-between"}>
              <Typography variant="subtitle1">{formatCurrency(meal.price * meal.qty)}</Typography>

              <AddQty qty={meal.qty} onAdd={handleAdd} onSub={handleSub} />
            </Box>


          </Box>

        </Stack>
        <Divider light />
      </Box>
    </>
  )
}


function AddQty({ qty, onAdd, onSub }) {
  return (
    <div className="btn-add-quantity">
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
        size="small"
        sx={{ alignItems: "center" }}
        className="m"
        color="secondary"
      >
        <Button onClick={onSub}>-</Button>
        <div className="add-count-ui">{qty}</div>
        <Button onClick={onAdd}>+</Button>
      </ButtonGroup>
    </div>
  )
}