import { Box, Button, ButtonGroup, Divider, Paper, Stack, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

export default function Checkout() {
  

  
  return (
    <>
      <Box minHeight={'100dvh'} component={'main'} className="co-container">

        <div className="co-account co-wrapper">

          <div className="box co-box co-box-1 co-account">
            <div className="co-account">
              <div className="co-heading mb-1">
                <h3 className="h3">Checkout</h3>
              </div>
              <Divider light />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus asperiores saepe reprehenderit cupiditate maxime porro non laudantium corporis eum quasi quibusdam suscipit quia sed minus harum enim officiis nihil nostrum tempora quos, dolorem vel quis! Accusamus unde itaque sed consequatur sequi rerum quaerat eaque hic, odio culpa quis! Adipisci?
              </p>
            </div>
          </div>

          <Box component={'aside'} className="box co-box co-box-2">
            <Cart />
          </Box>
        </div>

      </Box>
    </>
  )
}

function Cart() {
  const { items, dispatch, itemTotalPrice, totalPrice, tax } = useOutletContext();

  return (
    <>
      <div className="co-cart">
        <Typography variant="h5" marginBlockEnd={1}>Meals</Typography>

        {
          items.map(item => <CartItem key={item.id} meal={item} />)
        }

        <Box className="co-bl-wrapper pt-1">

          <Box className="co-bl-detail-wrap">
            <Typography className="co-bl-heading text-xl mb-1" marginBlockEnd={1} variant="h5">Bill Details</Typography>

            <div className="co-item-total text-base mb-1">
              <Typography fontWeight={600} className="co-item-l" variant="body1">Item Total</Typography>
              <Typography fontWeight={600} className="co-item-r" variant="body1">{formatCurrency(itemTotalPrice)}</Typography>
            </div>

            <Box className="co-item-tax text-base mb-1">
              <p className="co-item-l">GST</p>
              <p className="co-item-r">{formatCurrency(tax)}</p>
            </Box>

          </Box>

          <Divider light sx={{ marginBlockEnd: '1rem' }} />

          <div className="co-b-total-wrapper">
            <Box fontWeight={700} className="co-b-box">
              <Typography className="text-xl" variant="subtitle">Total Amount</Typography>
              <Typography className="text-xl" variant="subtitle">{formatCurrency(totalPrice)}</Typography>
            </Box>
          </div>

        </Box>

      </div>
    </>
  )
}


function CartItem({ meal }) {
  const { items, dispatch } = useOutletContext();

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

          <Box className="img-container">
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