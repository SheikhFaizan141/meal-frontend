// import AppHeader from "../components/AppHeader";
// import {}

import { Divider } from "@mui/material";

export default function Checkout() {
  return (
    <>
      <div className="co-container">
        <div className="co-wrapper">
          <div className="box co-box co-box-1">
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
      </div>
    </>
  )
}

function Cart() {

  return (
    <>
      <div className="co-cart">

        <div className="co-item-container">
          <div className="co-item-wrapper">

            <div className="img-container">
              <img src="" width="100" height="100" alt="" className="img" />
            </div>

            <div className="co-item-info">
              <h3 className="co-item-name">
                Lorem, ipsum dolor.
              </h3>
              <p className="co-cuisin text-sm">Indian</p>
            </div>

          </div>
        </div>

        <Divider light />

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