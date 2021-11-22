// React
import {useState, useEffect} from 'react'

// Styling
import './Categories.css'

// Components
import CategoryButton from '../Components/Button'

// Functions
function removeItemFromArray(arr, value) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

function foundDuplicate(Arr, InitialItem) {
        
  for (let i = 0; i < Arr.length; i++) {
      let item = Arr[i]
      if (InitialItem === item) {
          return true
      }
  }
  return false
}

export default function Categories(props) {

    //Cat

    // States
    const [display, setDisplay] = useState()
    const [categories, setCategories] = useState([])

    // Initial Loading Display
    let myArray = props.generateCategories()

    useEffect(() => {
        props.getRestaurants()

        setDisplay(

            // Mapping out the generated categories and creating a button per category on page load
            props.generateCategories().map((item, index) => {
                return (
                  <CategoryButton 
                  triggerRemove={triggerRemove}
                  context={item}
                  />
                )
            })

        )
    }, [])

    // Functions
    function triggerRemove(value) {

        // Removing the clicked category from the arrays
        myArray = removeItemFromArray(myArray, value)
        

        // Mapping
        // Creating li's from the finalized table with all duplicates removed
        let myCategories =  myArray.map((item, index) => {
            return (
              <CategoryButton 
              triggerRemove={triggerRemove}
              context={item}
              />
            )
        })

        setDisplay(myCategories)
        setCategories(myArray)
        console.log(myArray, value)
    }

    function queryRestaurants(targetCuisineItem) {
      let queryResults = []

      props.restaurantData.forEach((restaurant) => {
        
        for (let i = 0; i < restaurant.cuisines.length; i++) {
          let currentCuisineItem = restaurant.cuisines[i].name

          if (currentCuisineItem.search(targetCuisineItem) !== -1) {
            queryResults.push(restaurant._id)
          }
        }

      })

      return queryResults
    }

    function compileChoices() {
      let restaurantData = props.restaurantData
      let restaurantQuery = []

      myArray.forEach((value) => {
        restaurantQuery = [...restaurantQuery, ...queryRestaurants(value)]
      })

      props.restaurantData.forEach((restaurant) => {

        if (foundDuplicate(restaurantQuery, restaurant._id)) {
          
          let removedDupes = removeItemFromArray(restaurantQuery, restaurant._id)

          console.log(removedDupes.length > 1)
          if (removedDupes.length > 1) {
            restaurantQuery = removedDupes
          }
        }
        // restaurantQuery = 
      })
      

      console.log(restaurantQuery)
    }

    
    

    return (
        <div>
          <div className="categories">
            {display}
          </div>
          <button onClick={compileChoices} className="submit-button">
            Submit
          </button>
        </div>
    )

}