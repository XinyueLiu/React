import React from 'react';

const Card = ({product, setAddProducts}) => {
    const { name, filename, price } = product;
    return (<div className='card'>
                <div className='card-image'>
                    <img src={`/images/${filename}`} alt='product preview'/>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="card-title">{name}</div>
                        <div className="money">{`$${parseInt(price, 10) / 100.00}`}</div>
                        <button className="button"
                            onClick={ () => { setAddProducts(product); }}>
                            Add to cart</button>
                    </div>
                </div>
            </div>
    );
}

export default Card;