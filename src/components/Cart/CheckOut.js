import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import {connect} from 'react-redux'

// import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });

  async function handleToken(token, addresses) {
      console.log(token);
      
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
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
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

}


const mapStateToDispatch = (dispatch) => {

}


export default App