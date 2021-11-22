import RestaurantForm from "./Pages/RestaurantForm"

const Home = (props) => {
    return (
        <>
        <p>Tell us about your favorite restaurant </p>
        
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