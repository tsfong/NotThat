   
// React
import React, { useState } from 'react'

// Functions
const parseString = (string) => {
    return string.split(/[ ,]+/);  
  }

const RestaurantForm = (props) => {

    // States
    const [place, setPlace] = useState({ name: "", zipcode: ""})
    const [cuisines, setCuisines] = useState('')

    // Functions
    const handleSubmit = (e) => {
        e.preventDefault()

        let info = {name: place.name, zipcode: place.zipcode, cuisines: [{name: cuisines}]}
        
        props.postRestaurant(info, setPlace)
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        const copy = Object.assign({}, place)

        copy[name] = value

        setPlace(copy)
    }

    const handleCuisineChange = (e) => {
        const value = e.target.value
        const foodArray = parseString(value)


        setCuisines(value)

        console.log(cuisines)
    }

    return (
        <div className="footer">
            <form className="restaurant-form" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="input-field"  type="text" name="name" placeholder="Restaurant" value={place.name}/>
                <input onChange={handleChange} className="input-field"  type="text" name="zipcode" placeholder="Zipcode" value={place.zipcode}/>
                <input onChange={handleCuisineChange} className="input-field"  type="text" name="cuisines" placeholder="Cuisines" value={cuisines.value}/>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )

}

export default RestaurantForm