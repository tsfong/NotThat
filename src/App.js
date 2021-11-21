import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import About from './About';
import Home from './Home';

function App() {
  const [restaurantData, setRestaurantData] = useState([])


  const getRestaurants = () => {
    fetch('http://localhost:4000/restaurants', {
        method: 'GET'}
        )
        .then((res) => res.json())
        .then((data) => {setRestaurantData(data)})
}

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"element={<Home restaurantData={restaurantData} setRestaurantData={setRestaurantData} getRestaurants={getRestaurants}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
