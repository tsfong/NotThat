import { useState, useEffect } from "react"
import PlaceCard from "./PlaceCard"

const RestaurantDisplay = (props) => {

const handleDelete = async (event) => {
    let selectedRestaurant = event.target.parentNode.children[1].innerHTML // get restaurant id
    selectedRestaurant = selectedRestaurant.replace(/ /g, " ") // check for spaces
    props.deleteRestaurant(selectedRestaurant) // delete restaurant
}

const handleUpdate = () => {
    console.log('updated')
}


const restaurantMap = props.restaurantData.map((value) => {


    return(
        <PlaceCard getRestaurants={props.getRestaurants} putRestaurant={props.putRestaurant} value={value} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
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