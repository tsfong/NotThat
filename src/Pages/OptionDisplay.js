import { useState, useEffect } from "react"
import OptionCard from '../Components/OptionCard'

const OptionDisplay = (props) => {

    return (
        <OptionCard getRestaurants={props.getRestaurants} putRestaurant={props.putRestaurant} value={value} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    )
}


export default OptionDisplay