import React from 'react';
import PropTypes from 'prop-types';
import image from '../images/house-location-pin.svg';
import Filter from './Filter';

const Header = ({filterIsVisible, toggleFilter, handleFilterChange, clearFilter}) => {
    return (
        <header className={`${filterIsVisible ? 'filter-is-visible' : ''}`}>
            <Filter 
                toggleFilter={toggleFilter} 
                handleFilterChange={handleFilterChange}
                clearFilter={clearFilter}/>  
            <img src={image} />
            <h1>Property Listings</h1>
            <button className="btn-filter" onClick={(e) => toggleFilter(e)}>Filter</button>
        </header>
    );
};

Header.propTypes = {
    filterIsVisible: PropTypes.bool.isRequired,
    clearFilter: PropTypes.func.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};
   
export default Header;