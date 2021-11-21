import RestaurantDisplay from "./RestaurantDisplay"
import RestaurantForm from "./RestaurantForm"

const Home = (props) => {
    return (
        <>
            <RestaurantForm restaurantData={props.restaurantData} setRestaurantData={props.setRestaurantData} getRestaurants={props.getRestaurants}/>
            <RestaurantDisplay restaurantData={props.restaurantData} setRestaurantData={props.setRestaurantData} getRestaurants={props.getRestaurants}/>
        </>
    )
}

export default Home