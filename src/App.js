// Styling
import './App.css';

// React imports
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

// Components
import About from './About';
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
    fetch('http://localhost:4000/restaurants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restaurant)
        })
        .then(response => response.json())
        .then(data => setPlace({ name: "", zipcode: ""}))

        getRestaurants()
  }



  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/favorites" >Favorites</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"element={<Home 
        restaurantData={restaurantData} 
        setRestaurantData={setRestaurantData} 
        // CRUD Methods
        getRestaurants={getRestaurants} 
        postRestaurant={postRestaurant} 
        />}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
