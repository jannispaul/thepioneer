import React from "react"

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys

  componentDidMount() {
    this.stripe = window.Stripe("pk_test_E63rEPHarnDbo4p69HHyYw7V00ujoxooMj")
  }
  async redirectToCheckout(event, product) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: product, quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/error/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    const PRODUCT1 = "sku_GijHEv8twajao0"
    const PRODUCT2 = "sku_GijQhjVOrV0STs"
    return (
      <div>
        <button onClick={event => this.redirectToCheckout(event, PRODUCT1)}>
          Product1
        </button>
        <button onClick={event => this.redirectToCheckout(event, PRODUCT2)}>
          Product2
        </button>
      </div>
    )
  }
}
export default Checkout
