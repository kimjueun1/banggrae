import React, { Component } from "react";
import Bedroom from "../../assets/img/bedroom.webp";
import Bedroom1 from "../../assets/img/bedroom1.webp";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          img: Bedroom,
        },
        {
          img: Bedroom1,
        },
      ],
    };
  }
  render() {
    const { cart } = this.state;
    return <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8"></main>;
  }
}

export default Cart;
