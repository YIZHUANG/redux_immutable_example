import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    const { products, addToCart } = this.props;

    return products.map((product, index) => (
      <div key={index}>
        <span>{product.name} </span>
        <button
          style={{ marginLeft: '10' }}
          onClick={() => this.props.addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    ));
  }

  renderCartItems() {
    const { cartItems } = this.props;
    return cartItems.map((product, index) => (
      <div key={index}>
        <span>{product.name} </span>
      </div>
    ));
  }

  render() {
    const { products } = this.props;
    if (!products) {
      return <div>Loading....</div>;
    }
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="product_container">
          <h1>Product section</h1>
          {this.renderProducts()}
        </div>
        <div className="cart_container">
          <h1>Shopping cart section</h1>
          {this.renderCartItems()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.getIn(['productReducer', 'products']),
    cartItems: state.getIn(['cartReducer', 'cartItems'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
