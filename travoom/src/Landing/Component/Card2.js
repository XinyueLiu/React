import React from 'react';


const Card2 = ({property, activeProperty, setActiveProperty}) => {
    const {index, price, address, city, picture, day} = property;
    return (
        <div 
            id={`#card-${index}`} 
            className={`card2 ${property === activeProperty ? 'is-active' : ''}`}
            onClick={() => setActiveProperty(property, false)}
        >
            <img src={picture} alt={city} />
            <p className="price">${price}</p>
            <div className="details">
            <span className="index">{index+1}</span>
            <p className="location">
                {city}
            </p>
            <ul className="features">
                <li className="icon-bed">{day}<span>days</span></li>
            </ul>
                <a class="button is-primary is-small">tag</a>&nbsp;
                <a class="button is-link is-small">tag</a>&nbsp;
                <a class="button is-info is-small">tag3</a>&nbsp;
                <a class="button is-success is-small">tag</a>&nbsp;
                <a class="button is-warning is-small">tag long</a>&nbsp;
                <a class="button is-danger is-small">tag</a>&nbsp;
            </div>
        </div>
    )
    
}



export default Card2;