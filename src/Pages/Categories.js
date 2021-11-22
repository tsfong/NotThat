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

const parseString = (string) => {
  return string.split(/[ ,]+/);  
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

        let cuisineList = parseString(restaurant.cuisines[0].name)
        
        for (let i = 0; i < cuisineList.length; i++) {
          let currentCuisineItem = cuisineList[i]

          if (currentCuisineItem === targetCuisineItem) {
            // console.log(currentCuisineItem, targetCuisineItem)
            let search = queryResults.find((id) => {
              // conosle.log(id)
              return true
            })

            // restaurant._id

            // console.log(search)
          }
        }

      })

      return queryResults
    }

    function compileChoices() {
      let restaurantData = props.restaurantData
      let restaurantQuery = []
      let finalizedQuery = []

      myArray.forEach((value) => {
        restaurantQuery = [...restaurantQuery, ...queryRestaurants(value)]
      })

      // props.restaurantData.forEach((restaurant) => {

      //   if (foundDuplicate(restaurantQuery, restaurant._id)) {
          
      //     if (restaurantQuery.length > 1) {
      //       let removedDupes = removeItemFromArray(restaurantQuery, restaurant._id)

      //       finalizedQuery = removedDupes
      //       console.log(restaurantQuery.length,  restaurantQuery, removedDupes)
      //     }
      //   }
      // })
      

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