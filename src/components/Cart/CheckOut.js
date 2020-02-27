import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import {connect} from 'react-redux'

// import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function App(props) {
  const [product] = React.useState({
    name: 'HANGER',
    price: props.total,
    description: "PRODUCTS"
  });

  async function handleToken(token, addresses) {
      console.log(token);


      let newCart = [...props.cart].map(product=> { return {pid: product.pid, img: product.thumb_image, quantity: product.quantity}})
     

      fetch('http://localhost:3000/orders',{
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'Token': localStorage.getItem('token')
        },
        body: JSON.stringify({ 
          user:{
            last_4: token.card.last4, 
            client_ip: token.client_ip, 
            products: newCart, 
            address: {...props.selectedAddress}
          }
        })
      })
      .then(res => {
        // debugger
        return res.json()
        }).then(data => console.log(data))
      // .then(res => res.json()).then(data => console.log(data))
//       {id: "tok_1GGPVCG91malMoJn6DTpXGsx", object: "token", card: {…}, client_ip: "65.213.153.66", created: 1582722038, …}
// id: "tok_1GGPVCG91malMoJn6DTpXGsx"
// object: "token"
// card:
// id: "card_1GGPVCG91malMoJnVAiwWIpG"
// object: "card"
// address_city: "macon"
// address_country: "United States"
// address_line1: "3871 northside drive, apt n7"
// address_line1_check: "pass"
// address_line2: null
// address_state: "GA"
// address_zip: "31210"
// address_zip_check: "pass"
// brand: "Visa"
// country: "US"
// cvc_check: "pass"
// dynamic_last4: null
// exp_month: 4
// exp_year: 2024
// funding: "credit"
// last4: "4242"
// metadata: {}
// name: "yash patel"
// tokenization_method: null
// __proto__: Object
// client_ip: "65.213.153.66"
// created: 1582722038
// email: "test@test.com"
// livemode: false
// type: "card"
// used: false



    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }

  return (
    <div className="container">
      <div className="product">
        {/* <h1>{product.name}</h1> */}
        <h3>Total · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        image='https://webkit.org/demos/srcset/image-1x.png'
        currency='USD'
        panelLabel='Pay Now'
        email='test@test.com'
        token={handleToken}
        amount={product.price * 100}
        name="Hanger"
        billingAddress
        // shippingAddress
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {...state.cart, ...state.user}
}


const mapStateToDispatch = (dispatch) => {

}


export default connect(mapStateToProps)(App)