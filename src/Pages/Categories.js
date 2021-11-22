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
        let found = false

        
        for (var i = 0; i < buttons.length; i++) {
            let item = buttons[i]
            console.log(InitialItem, item)
            if (InitialItem === item) {
                found = true
                return true
                break;
            }
        }
        return found
    }

    // Mapping
    let myCategories = restaurantData.map((restaurant) => {
        // console.log(parseString(restaurant.cuisines[0].name))
        
        let cuisineItems = parseString(restaurant.cuisines[0].name)
        
        let items = cuisineItems.map((item) => {
            checkForDupes(item)
            return (
                !checkForDupes(item) ? <li>{item}</li> : ''
            )

        })

        
        return (
            <div>
                {items}
            </div>
        )
    })

    // console.log(myCategories)

    return (
        <div>
            <ul>
                {myCategories}
            </ul>
        </div>
    )

}