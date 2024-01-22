// import AppHeader from "../components/AppHeader";
// import {}

import { Box, Divider, Stack, Typography } from "@mui/material";
import AddButton from "../components/AddBtn";

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


          <div className="box co-box co-box-2">
            <Cart />
          </div>

        </div>

      </Box>
    </>
  )
}

function Cart() {

  return (
    <>
      <div className="co-cart">
        <Typography variant="h5" marginBlockEnd={1}>Meals</Typography>
        <Box marginBlockEnd={1} border={1} paddingInline={0.5} paddingBlock={0.5} borderRadius={1} direction={'row'} justifyContent={'space-between'} className="co-item-container">
          <Stack direction={'row'} className="co-item-wrapper">

            <Box className="img-container">
              <img loading="lazy" src="img/mark-deyoung-mjcJ0FFgdWI-unsplash.jpg" width="100" height="100" alt="" className="img" />
            </Box>

            <div className="co-item-info">
              <h3 className="co-item-name">
                Lorem, ipsum dolor.
              </h3>
              <p className="co-cuisin text-sm">Indian</p>
            </div>

          </Stack>

          <Divider sx={{ marginBlockEnd: '0.75rem' }} light />

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="subtitle1">$100</Typography>
            <AddButton />
          </Box>

        </Box>


        <div className="co-bl-wrapper pt-1">

          <div className="co-bl-detail-wrap">
            
            <h4 className="co-bl-heading text-xl mb-1">Bill Details</h4>

            <div className="co-item-total text-base mb-1">
              <p className="co-item-l">Item Total</p>
              <p className="co-item-r">$900</p>
            </div>

            <div className="co-item-tax text-base mb-1">
              <p className="co-item-l">GST</p>
              <p className="co-item-r">$9</p>
            </div>

          </div>

          <Divider light sx={{ marginBlockEnd: '1rem' }} />

          <div className="co-b-total-wrapper">
            <div className="co-b-box">
              <p className="text-xl">Total Amount</p>
              <p className="text-xl">$909</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}