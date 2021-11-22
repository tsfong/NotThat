// React
import { useState } from "react"

// Styling
import './PlaceCard.css'

// Functions
const parseString = (string) => {
    if(!string){
        return []
    }else{
    return string.split(/[ ,]+/);  
    }
}

// Component
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
//         <div className="PlaceCard">
//             {updating ? <form onSubmit={finalizeUpdate}>
//                 <input onChange={handleEdit} name="name" value={info.name} type="text" placeholder="Restaurant" />
//                 <input onChange={handleEdit} name="zipcode" value={info.zipcode} type="text" placeholder="Zipcode" />
//                 <button type="submit">Save</button> 
//             </form> : <ul>   
//                 <li>Restaurant: {props.value.name}</li>
//                 <li>Zipcode: {props.value.zipcode}</li>
//                 <li>Cuisines: <ul className="cuisine-list"> {CuisineItems} </ul>  </li>
//             </ul>}
//             <p className="hide-me">{props.value._id}</p>
            
//             {updating ? "" : <button className="update-button" onClick={update}>Update</button>
// }

//             <button onClick={props.handleDelete}>Delete</button>
        // </div>

        
        <div class="place-card">
            <p className="hide-me">{props.value._id}</p>
            {updating ? 
            <form onSubmit={finalizeUpdate}>
                <input className="place-card-input-field" onChange={handleEdit} name="name" value={info.name} type="text" placeholder="Restaurant" />
                <input className="place-card-input-field" onChange={handleEdit} name="zipcode" value={info.zipcode} type="text" placeholder="Zipcode" />
                <button type="submit">Save</button> 
            </form> : 
            ''
            }
            {!updating ? <div>Restaurant: {props.value.name}</div> : ''}
            {!updating ? <div>Zipcode: {props.value.zipcode}</div> : ''}
            {!updating ? <div class="flexible">Cuisines: <ul className="cuisine-list"> {CuisineItems} </ul></div> : <div class="flexible"></div>}
            <div>{updating ? "" : <button className="update-button" onClick={update}>Update</button>} <button onClick={props.handleDelete}>Delete</button></div>
        </div>


    )
}   
export default PlaceCard