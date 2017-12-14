import React from 'react';


const Card2 = ({property, setActiveProperty}) => {
    const {index, price, address, city, picture, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div 
            id={`#card-${index}`} 
            className={`card2`}
            onClick={() => setActiveProperty(property, false)}
        >
            <img src={picture} alt={city} />
            <p className="price">{price}</p>
            <div className="details">
            <span className="index">{index+1}</span>
            <p className="location">
                {city}<br />{address}
            </p>
            <ul className="features">
                <li className="icon-bed">{bedrooms}<span>bedrooms</span></li>
                <li className="icon-bath">{bathrooms}<span>bathrooms</span></li>
                <li className="icon-car">{carSpaces}<span>parking spots</span></li>
            </ul>
            </div>
        </div>
    )
    
}



export default Card2;