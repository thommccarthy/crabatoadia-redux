import React from "react"
import * as storeTopStyles from "./StoreTop.module.css"

class StoreTop extends React.Component {
  state = {
    items: 0,
  }

  updateItemTotal = qty => {
    this.setState({ items: qty })
  }

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count()
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe("cart.closed", () => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe("cart.ready", data => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })
    }
  }

  componentWillUnmount() {
    window.Snipcart.unsubscribe("cart.closed")
    window.Snipcart.unsubscribe("cart.ready")
  }

  render() {
    return (
      <div className={storeTopStyles.wrapper}>
        <h1 className={storeTopStyles.header}>Store</h1>
        {this.state.items > 0 ? (
          <div className={`snipcart-summary ${storeTopStyles.cartWrapper}`}>
            <button className={`snipcart-checkout ${storeTopStyles.cart}`}>
              cart ({this.state.items})
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default StoreTop
