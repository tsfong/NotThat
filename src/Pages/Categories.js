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

    
    

    return (
        <div className="categories">
            {display}
        </div>
    )

}