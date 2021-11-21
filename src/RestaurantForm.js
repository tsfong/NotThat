import React, { useState } from 'react'

const RestaurantForm = (props) => {

    const [place, setPlace] = useState({ name: "", zipcode: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/restaurants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(place)
        })
        .then(response => response.json())
        .then(data => setPlace({ name: "", zipcode: ""}))
        props.getData()
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        const copy = Object.assign({}, place)
        copy[name] = value
        setPlace(copy)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" placeholder="Restaurant" value={place.restaurant}/>
                <input onChange={handleChange} type="text" name="zipcode" placeholder="Zipcode" value={place.zipcode}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default RestaurantForm