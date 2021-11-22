import { useState, useEffect } from "react"
import OptionCard from '../Components/OptionCard'

const OptionDisplay = (props) => {

    const restaurantOptionMap = props.restaurantData.map((value) => {

        return(
            <OptionCard getRestaurants={props.getRestaurants} putRestaurant={props.putRestaurant} value={value} />
        )
    })

    return (
        <div className="restaurant-options">
            {restaurantOptionMap}
        </div>
    )
}


export default OptionDisplay