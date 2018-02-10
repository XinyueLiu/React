import React from 'react';

const Counting = ({setDeleteProducts, productTotal, clickDetail}) => {
    let content = [];
    if(localStorage.getItem("productsInCart") !== null) {
        let products = JSON.parse(localStorage.getItem("productsInCart"));
        Object.keys(products).forEach(function(key,index) {
            const product = products[key];
            content.push(
                <div className="wrapper" key={index}>
                      <img src={`/images/${product.filename}`} alt='product preview'/>
                      <span className="product-title">{product.name}</span>
                      <div className="money">{`$${parseInt(product.price, 10)/ 100.00}`}</div>
                      <div className="x"
                            onClick={ () => { setDeleteProducts(product); }}>
                            <i className="fa fa-times"></i>
                     </div>
                </div>
            )
        });
        if (content.length === 0) {
            content = [<div key='line0' className="line0">Nothing in your cart, start shopping.</div>];
        } 
        content.push(<div key='line2' className="line"></div>);
        content.push(<div key='line3' className="title total">Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`$${productTotal == 0 ? 0 : productTotal.toFixed(2)}`}</div>)
        
      } 
    return (
        <div className="countContent">
            <div className="title">Your Cart</div>
            {content}
            <button className="button" onClick={ () => { clickDetail(); }}>Back</button>
        </div>
    )
}

export default Counting;