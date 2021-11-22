import RestaurantForm from "./RestaurantForm"

const Home = (props) => {
    return (
        <>
            <RestaurantForm 
            restaurantData={props.restaurantData} 
            setRestaurantData={props.setRestaurantData} 
            getRestaurants={props.getRestaurants}
            postRestaurant={props.postRestaurant}
            />
    
        </>
    )
}

export default Home