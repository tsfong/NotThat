import { useState, useEffect } from "react"
import PlaceCard from "./PlaceCard"

const RestaurantDisplay = (props) => {

const handleDelete = async (event) => {
    let selectedRestaurant = event.target.parentNode.children[1].innerHTML
    selectedRestaurant = selectedRestaurant.replace(/ /g, " ")

    await fetch(`http://localhost:4000/restaurants/${selectedRestaurant}`, {
            method: 'DELETE',
        })   
        props.getRestaurants()    
    }

const handleUpdate = () => {
    console.log('updated')
}


const restaurantMap = props.restaurantData.map((value) => {

    return(
        <PlaceCard getRestaurants={props.getRestaurants} value={value} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    )
})

useEffect(() => {
    props.getRestaurants()
}, [])

    return(
        <>
        <h1>Displayed!</h1>
        <div>
            {restaurantMap}
        </div>
        </>
    )
}

export default RestaurantDisplay