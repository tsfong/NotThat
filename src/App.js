// Styling
import './App.css';

// React imports
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

// Components
import Categories from './Pages/Categories';
import About from './Pages/About';
import Home from './Home';

function App() {

  // States
  const [restaurantData, setRestaurantData] = useState([])


  // Functions
  const getRestaurants = () => {
    fetch('http://localhost:4000/restaurants', {
        method: 'GET'}
        )
        .then((res) => res.json())
        .then((data) => {setRestaurantData(data)})
  }

  const postRestaurant = (restaurant, setPlace) => {
    console.log(JSON.stringify(restaurant))
    fetch('http://localhost:4000/restaurants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restaurant)
        })
        .then(response => response.json())
        .then(data => setPlace({ name: "", zipcode: ""}))
        .then(data => {getRestaurants()})
        
  }

  const putRestaurant = (id, info) => {
    fetch(`http://localhost:4000/restaurants/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(data => {getRestaurants()})
  }

  
  const deleteRestaurant = (restaurant) => {
    fetch(`http://localhost:4000/restaurants/${restaurant}`, {
            method: 'DELETE',
        })
        .then(data => {getRestaurants()})
  }




  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/favorites" >Favorites</Link></li>
          <li><Link to="/categories">Categories</Link> </li>
        </ul>
      </nav>
      <Routes>
        {/* Home */}
        <Route path="/"element={<Home 
        restaurantData={restaurantData} 
        setRestaurantData={setRestaurantData} 
        // CRUD Methods
        getRestaurants={getRestaurants} 
        postRestaurant={postRestaurant} 
        />}/>

          {/* Favorites */}
        <Route exact path="/favorites" element={<About
        restaurantData={restaurantData} 
        setRestaurantData={setRestaurantData} 
        // CRUD Methods
        getRestaurants={getRestaurants} 
        postRestaurant={postRestaurant} 
        putRestaurant={putRestaurant}
        deleteRestaurant={deleteRestaurant}
        />}/>

        {/* Categories */}
        <Route exact path="/categories" element={<Categories
        getRestaurants={getRestaurants} restaurantData={restaurantData}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
