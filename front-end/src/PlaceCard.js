import { useState } from "react"


const PlaceCard = (props) => {
    const [ updating, setUpdating] = useState(false) 
    const [info, setInfo] = useState({ name: "", zipcode: ""})
    const id = props.value._id

    const update = () => {
        setUpdating(!updating)
    }
    const finalizeUpdate = async (e) => {
        let placeInfo = {}
        update()
        props.handleUpdate()
        e.preventDefault()
        await fetch(`http://localhost:4000/restaurants/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        props.getRestaurants()
    }
    
    const handleEdit = (e) => {
        const value = e.target.value
        const name = e.target.name
        const copy = Object.assign({}, info)
        copy[name] = value
        setInfo(copy)
    }

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
            </ul>}
            <p className="hide-me">{props.value._id}</p>
            
            {updating ? "" : <button onClick={update}>Update</button>
}

            <button onClick={props.handleDelete}>Delete</button>
        </div>

    )
}   

export default PlaceCard
   
   