import React, { Component } from 'react';
import data from './data/Data';
import Card from './components/Card';
import Counting from './components/Counting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      index: 0,
      showDetail: false,
      productTotal: 0
    }
    this.setAddProducts = this.setAddProducts.bind(this);
    this.clickDetail = this.clickDetail.bind(this);
    this.setDeleteProducts = this.setDeleteProducts.bind(this);
  }

  clickDetail() {
    if (this.state.showDetail === false) {
      this.setState({
        showDetail: true
      })
    } else {
      this.setState({
        showDetail: false
      })
    }
  }

  setDeleteProducts(product) {
    if (localStorage.getItem("productsInCart") !== null) {
      const products = JSON.parse(localStorage.getItem("productsInCart"));

      // Remove item from dishes that equal dish ID
      delete products[product.name];

      localStorage.setItem("productsInCart", JSON.stringify(products));
    }
    if (localStorage.getItem("productsInCart") !== null) {
      const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
      let total = 0;
      Object.keys(productsInCart).forEach(function(key,index) {
        const product = productsInCart[key];
        total += parseInt(product.price, 10) / 100.00;
      });
      this.setState ({
        index: Object.keys(productsInCart).length,
        productTotal: total
      })
    } else {
      this.setState ({
        index: 0,
        productTotal: 0
      })
    }
  }

  setAddProducts(product) {
    if(product !== undefined) {
        if (localStorage.getItem("productsInCart") !== null) {
            let products = JSON.parse(localStorage.getItem("productsInCart"));
            
            products[product.name] = product;
    
            localStorage.setItem("productsInCart", JSON.stringify(products));
          } else {
            const products = {};
            products[product.name] = product;
    
            localStorage.setItem("productsInCart", JSON.stringify(products));
          }
    }
    if (localStorage.getItem("productsInCart") !== null) {
      const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
      let total = 0;
      Object.keys(productsInCart).forEach(function(key,index) {
        const product = productsInCart[key];
        total += parseInt(product.price, 10) / 100.00;
      });
      this.setState ({
        index: Object.keys(productsInCart).length,
        productTotal: total
      })
    } else {
      this.setState ({
        index: 0,
        productTotal: 0
      })
    }
  }

  componentDidMount() {
    this.setAddProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <nav className="navbar">
          <div className="item1">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp; 
              Cart.ly
          </div>
          <div className="item2">
            <a href='/'>Shop</a>
          </div>
          <div className="item3">
            <div onClick={this.clickDetail}>Your Cart</div>
          </div>
          <div className="index">{this.state.index}</div>
        </nav>
        <div className='appTitle'>Shop our featured collection</div>
        <div className='container'>    
          {
              products.map((product, index) => {
                return <div className="card-wrapper" key={index}>
                          <Card 
                          product={product}
                          setAddProducts={this.setAddProducts}
                          />
                        </div>
              })
          }   
         
        </div>
        <div className='hiddenLayer' style={{display: this.state.showDetail ? 'block' : 'none'}}>
          <Counting 
          setDeleteProducts={this.setDeleteProducts}
          productTotal={this.state.productTotal}
          clickDetail={this.clickDetail}/>
        </div>
      </div>
    );
  }
}

export default App;
