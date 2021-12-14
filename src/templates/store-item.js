import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as storeItemStyles from "./store-item.module.css"

class StoreItem extends React.Component {
  state = {
    selected:
      this.props.data.markdownRemark.frontmatter.customField.values[0].name,
    items: 0,
  }

  setSelected = value => {
    this.setState({ selected: value })
  }

  // create the string required by snipcart to allow price changes based on option chosen
  createString = values => {
    return values
      .map(option => {
        const price =
          option.priceChange >= 0
            ? `[+${option.priceChange}]`
            : `[${option.priceChange}]`
        return `${option.name}${price}`
      })
      .join("|")
  }

  // calculate price based on option selected for display on item page
  updatePrice = (basePrice, values) => {
    const selectedOption = values.find(
      option => option.name === this.state.selected
    )
    return (basePrice + selectedOption.priceChange).toFixed(2)
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
    const item = this.props.data.markdownRemark

    return (
      <section>
        <h1
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="easeInBack"
          className={storeItemStyles.title}
        >
          {item.frontmatter.title}
        </h1>
        <div className={storeItemStyles.singleProductGrid}>
          <div className={storeItemStyles.imageWrapper}>
            <GatsbyImage
              alt={`${item.frontmatter.title} product photo`}
              image={item.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          </div>
          <div className={storeItemStyles.priceToButtons}>
            <p className={storeItemStyles.price}>
              $
              {this.updatePrice(
                item.frontmatter.price,
                item.frontmatter.customField.values
              )}
            </p>
            <p
              data-sal="flip-right"
              data-sal-delay="200"
              data-sal-duration="600"
              data-sal-easing="easeInBack"
              className={storeItemStyles.description}
            >
              {item.frontmatter.description}
            </p>
            <select
              className={storeItemStyles.selectButton}
              id={item.frontmatter.customField.name}
              onChange={e => this.setSelected(e.target.value)}
              value={this.state.selected}
            >
              {item.frontmatter.customField.values.map(option => (
                <option key={option.name}>{option.name}</option>
              ))}
            </select>
            <br />
            <button
              className={`snipcart-add-item ${storeItemStyles.addToCartButton}`}
              data-item-id={item.frontmatter.id}
              data-item-price={item.frontmatter.price}
              data-item-name={item.frontmatter.title}
              data-item-description={item.frontmatter.description}
              // must use fluid and src here in query
              data-item-image={item.frontmatter.image.childImageSharp.fluid.src}
              // must be url where button is
              data-item-url={"https://crabatoadia.com/store" + item.fields.slug}
              data-item-custom1-name={
                item.frontmatter.customField
                  ? item.frontmatter.customField.name
                  : null
              }
              data-item-custom1-options={this.createString(
                item.frontmatter.customField.values
              )}
              data-item-custom1-value={this.state.selected}
            >
              Add to Cart
            </button>
            {this.state.items > 0 ? (
              <div
                className={`snipcart-summary ${storeItemStyles.cartWrapper}`}
              >
                <button className={`snipcart-checkout ${storeItemStyles.cart}`}>
                  cart ({this.state.items})
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <Link to="/store" className={storeItemStyles.backToStore}>
          Back to Store
        </Link>
      </section>
    )
  }
}

export default StoreItem

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        price
        id
        image {
          publicURL
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData(placeholder: BLURRED)
            id
          }
        }
        customField {
          name
          values {
            name
            priceChange
          }
        }
      }
    }
  }
`
