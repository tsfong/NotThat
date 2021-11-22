// React
import {useState, useEffect} from 'react'


export default function Categories(props) {

    // PropInfo
    const restaurantData = props.restaurantData

    // States
    const [buttons, setButtons] = useState([])

    // Initial Loading Display
    useEffect(() => {
        props.getRestaurants()
    }, [])

    // Functions

    // Mapping
    let myCategories = props.generateCategories()



    console.log(myCategories)

    return (
        <div>
            {myCategories}
        </div>
    )

}