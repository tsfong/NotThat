<<<<<<< HEAD
import RestaurantForm from "./RestaurantForm"
=======
import RestaurantForm from "./Pages/RestaurantForm"
>>>>>>> marcoTeam

const Home = (props) => {
    return (
        <>
<<<<<<< HEAD
=======
        <h3>Tell us about your favorite restaurant </h3>
        
>>>>>>> marcoTeam
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