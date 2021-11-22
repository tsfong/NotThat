import { useState } from "react"

const parseString = (string) => {
    return string.split(/[ ,]+/);  
}

const PlaceCard = (props) => {

    // States
    const [ updating, setUpdating] = useState(false) 
    const [info, setInfo] = useState({ name: "", zipcode: ""})
    const id = props.value._id

    // Functions
    const update = () => {
        setUpdating(!updating) //setting the ternary boolean
    }

    const finalizeUpdate = async (e) => {
        e.preventDefault()

        update() // for setting the ternary boolean
        props.handleUpdate() // just console logs 'updated'
        props.putRestaurant(id, info) // sending post request
    }
    
    const handleEdit = (e) => {
        const value = e.target.value
        const name = e.target.name
        const copy = Object.assign({}, info)
        copy[name] = value
        setInfo(copy)
    }

    let CuisineArray = parseString(props.value.cuisines[0].name)
    let CuisineItems = CuisineArray.map((cuisineItem) => {

        return (
            <li>
                {cuisineItem}
            </li>
        )
    })

    return (
        <div>
            {updating ? <form onSubmit={finalizeUpdate}>
                <input onChange={handleEdit} name="name" value={info.name} type="text" placeholder="Restaurant" />
                <input onChange={handleEdit} name="zipcode" value={info.zipcode} type="text" placeholder="Zipcode" />
                <button type="submit">Save</button> 
            </form> : <ul>   
                <li>Restaurant: {props.value.name}</li>
                {/* <li>Country: {updating ? <input/> : props.value.country}</li> */}
                <li>Zipcode: {props.value.zipcode}</li>
                <li>Cuisines: <ul> {CuisineItems} </ul>  </li>
            </ul>}
            <p className="hide-me">{props.value._id}</p>
            
            {updating ? "" : <button onClick={update}>Update</button>
}

            <button onClick={props.handleDelete}>Delete</button>
        </div>

    )
}   

export default PlaceCard
   
   