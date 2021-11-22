import { useState, useEffect } from "react"
import OptionCard from '../Components/OptionCard'

import './OptionDisplay.css'

const OptionDisplay = (props) => {

    console.log(props.currentRestaurants)

    const restaurantOptionMap = props.currentRestaurants.map((value) => {

        return(
            <OptionCard value={value} />
        )
    })

    return (
        <div class="place-card__wrap--outer">
                <div class="place-card__wrap--inner">
                    {restaurantOptionMap}
                </div>
        </div>
    )
}


export default OptionDisplay