// React
import {useState, useEffect} from 'react'

// Functions
const parseString = (string) => {
    return string.split(/[ ,]+/);  
  }

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
    function checkForDupes(InitialItem) {
        buttons.forEach((item) => {
            if (InitialItem === item) {
                return true
            }
        })
        return false
    }

    // Mapping
    let myCategories = restaurantData.map((restaurant) => {
        console.log(parseString(restaurant.cuisines[0].name))
        
        let cuisineItems = parseString(restaurant.cuisines[0].name)
        
        cuisineItems.forEach((item) => {
            if (!checkForDupes) {
                return
            }
        })
        
        return (
            <div>
    
            </div>
        )
    })

    return (
        <div>
            <ul>
                {myCategories}
            </ul>
        </div>
    )

}