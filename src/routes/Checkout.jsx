import { Box, Button, ButtonGroup, Divider, Paper, Stack, Typography } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
import img from '../assets/checkout-img.png'
import Cart from "@components/Cart/Cart";


export default function Checkout() {
  const { isEmpty } = useOutletContext();

  return (
    <Box component={'main'} paddingBlockStart={10} paddingBlockEnd={6}>
      {
        isEmpty ? <CheckoutEmpty /> : <CheckoutFilled />
      }
    </Box>
  )
}


function CheckoutFilled() {
  return (
    <Stack paddingBlock={3} direction={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 2, sm: 3 }} className="co-account co-wrapper">
      <Paper square sx={{ flex: 2 }}>
        <Box className="box co-box co-box-1 co-account">
          <div className="co-account">
            <Box paddingBlock={2} paddingInline={2} className="co-heading">
              <Typography variant="h5" fontWeight={400} color={'GrayText'} >Checkout</Typography>
            </Box>

            <Divider light />

            <Box paddingBlock={2} paddingInline={2}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus asperiores saepe reprehenderit cupiditate maxime porro non laudantium corporis eum quasi quibusdam suscipit quia sed minus harum enim officiis nihil nostrum tempora quos, dolorem vel quis! Accusamus unde itaque sed consequatur sequi rerum quaerat eaque hic, odio culpa quis! Adipisci?
              </Typography>
            </Box>
          </div>
        </Box>
      </Paper>

      <Paper square sx={{ flex: 1 }} >
        <Box flex={1} component={'aside'} className="box co-box co-box-2">
          <Cart />
        </Box>
      </Paper>
    </Stack>
  );
}


function CheckoutEmpty() {
  return (
    <Box paddingBlock={3}>
      <Stack alignItems={'center'} spacing={0.5}>
        <Box width={'50%'} maxWidth={'380px'} minWidth={'271px'} className="img-container" >
          <img className="img" src={img} alt="empty cart" loading="lazy" />
        </Box>
        <Typography variant={'h6'}>Your cart is empty</Typography>
        <Typography variant={'subtitle1'}>Go to home page to view meals</Typography>
        <Button component={Link} to={'/'} variant="contained" color="success" rad>See Meals</Button>
      </Stack>
    </Box>
  )
}