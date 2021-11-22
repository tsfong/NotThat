import RestaurantDisplay from "../RestaurantDisplay"

const About = (props) => {
    return (
        <>
        <RestaurantDisplay 
            restaurantData={props.restaurantData} 
            setRestaurantData={props.setRestaurantData} 
            getRestaurants={props.getRestaurants}
            putRestaurant={props.putRestaurant}
            deleteRestaurant={props.deleteRestaurant}
            />
        </>
    )
}

export default About