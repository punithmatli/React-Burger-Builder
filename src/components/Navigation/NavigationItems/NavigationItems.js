import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return <ul className={classes.NavigationItems}>
        <NavigationItem exact link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Checkout</NavigationItem>
    </ul>
}

export default NavigationItems;