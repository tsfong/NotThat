// Styling
import './App.css';

// React imports
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

// Components
import OptionDisplay from './Pages/OptionDisplay';
import Categories from './Pages/Categories';
import About from './Pages/About';
import Home from './Home';
import TeamPage from './Team/TeamPage';
import apiUrl from './apiConfig';

//icons
import { FaClone, FaHeart, FaHome } from "react-icons/fa";
import {IoPeopleSharp} from "react-icons/io5";


// Functions
function foundDuplicate(Arr, InitialItem) {
        
  for (let i = 0; i < Arr.length; i++) {
      let item = Arr[i]
      if (InitialItem === item) {
          return true
      }
  }
  return false
}

const parseString = (string) => {
  return string.split(/[ ,]+/);  
}

function App() {

  // States
  const [restaurantData, setRestaurantData] = useState([])
  const [currentRestaurants, setCurrentRestaurants] = useState()

  // Functions
  const generateCategories = () => {
    // getRestaurants()
    let mergedCuisines = []
    let finalizedCuisineArray = []

    // Looping through all the restaurants to merge the cuisine all into one array
    restaurantData.forEach((restaurant) => {
        // Getting the cuisine key from the restaurant object
        let cuisineItems = parseString(restaurant.cuisines[0].name)
        mergedCuisines = [...mergedCuisines, ...cuisineItems]
    })

    // Stripping the merged arrays from duplicate cuisines
    mergedCuisines.forEach((item, index) => {
      if (!foundDuplicate(finalizedCuisineArray, item)) {finalizedCuisineArray.push(item)}
    })

    return finalizedCuisineArray
  }

  // Functions
  // const generateCategories = () => {
  //   // getRestaurants()
  //   let mergedCuisines = []
  //   let finalizedCuisineArray = []

  //   // Looping through all the restaurants to merge the cuisine all into one array
  //   restaurantData.forEach((restaurant) => {
  //       let cuisineItems = parseString(restaurant.cuisines[0].name)
  //       mergedCuisines = [...mergedCuisines, ...cuisineItems]
  //   })

  //   // Stripping the merged arrays from duplicate cuisines
  //   mergedCuisines.forEach((item, index) => {
  //     if (!foundDuplicate(finalizedCuisineArray, item)) {finalizedCuisineArray.push(item)}
  //   })

  //   // Creating li's from the finalized table with all duplicates removed
  //   let duplicatesRemoved = finalizedCuisineArray.map((item, index) => {
  //     return (
  //       <li>{item}</li>
  //     )
  //   })

  //   return duplicatesRemoved
  // }

  // CRUD
  const getRestaurants = () => {
    fetch(`${apiUrl}/restaurants`, {
        method: 'GET'}
        )
        .then((res) => res.json())
        .then((data) => {setRestaurantData(data)})
  }

  const postRestaurant = (restaurant, setPlace) => {
    fetch(`${apiUrl}/restaurants`, {
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
    fetch(`${apiUrl}/restaurants/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(data => {getRestaurants()})
  }

  
  const deleteRestaurant = (restaurant) => {
    fetch(`${apiUrl}/restaurants/${restaurant}`, {
            method: 'DELETE',
        })
        .then(data => {getRestaurants()})
  }




  return (
    <div className="App">
      <h1>Not That</h1>
      <nav>
        <ul className="navbar">
         
          <li><Link to="/" ><FaHome/></Link></li>
          <li><Link to="/favorites" ><FaHeart/></Link></li>
          <li><Link to="/categories"><FaClone /></Link> </li>
          <li><Link to="/team"><IoPeopleSharp /></Link> </li>
          
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
        getRestaurants={getRestaurants} 
        restaurantData={restaurantData}
        foundDuplicate={foundDuplicate}
        generateCategories={generateCategories}
        setCurrentRestaurants={setCurrentRestaurants}
        />}/>

        {/* Team*/}
        <Route exact path="/team" element={<TeamPage
        />}/>

        <Route exact path="/options" element={<OptionDisplay
        currentRestaurants={currentRestaurants}
        />}/>
      </Routes>
    </div>
  );
}

export default App;