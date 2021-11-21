import React, { useState } from 'react'

const RestaurantForm = (props) => {

    const [place, setPlace] = useState({ name: "", zipcode: ""})
    const [cuisines, setCuisines] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props)
        props.postRestaurant(place, setPlace)
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        const copy = Object.assign({}, place)
        copy[name] = value
        setPlace(copy)
    }

    // const handleCuisineChange = (e) => {
    //     const value = e.target.value
    //     // const name = e.target.name
    //     // const copy = Object.assign({}, cuisines)
    //     // copy[0] = value
    //     setCuisines({value})
    //     console.log(cuisines)
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" placeholder="Restaurant" value={place.name}/>
                <input onChange={handleChange} type="text" name="zipcode" placeholder="Zipcode" value={place.zipcode}/>
                {/* <input onChange={handleCuisineChange} type="text" name="cuisines" placeholder="Cuisines" value={cuisines.value}/> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default RestaurantForm