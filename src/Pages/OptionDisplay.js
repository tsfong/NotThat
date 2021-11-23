import { useState, useEffect } from "react"
import OptionCard from '../Components/OptionCard'

import './OptionDisplay.css'

// Functions
function getRandomElement(items) {
    return items[Math.floor(Math.random()*items.length)]
}

const OptionDisplay = (props) => {

    // States
    const [options, setOptions] = useState([])

    // Functions
    function GenerateOptions() {

        let myOptions = []
        function populateOptions() {
            let randomElement = getRandomElement(props.currentRestaurants)
            if (myOptions.indexOf(randomElement) === -1) {
                myOptions.push(randomElement)
                // populateOptions()
            } 
            // else {
            //     if (myOptions.length < 3) {
            //         populateOptions()
            //     } else {
            //         console.log(myOptions.length)
            //         return myOptions
            //     }  
            // }

            return myOptions
        }

        populateOptions()

        return myOptions
    }

    function refreshOptions() {
        setOptions(GenerateOptions())
    }


    useEffect(() => {


        setOptions(GenerateOptions())
        
    }, [])

    const restaurantOptionMap = options.map((value) => {

        return(
            <OptionCard value={value} />
        )
    })

    return (
        <div>
            <div class="place-card__wrap--outer">
                <div class="place-card__wrap--inner">
                    {restaurantOptionMap}
                </div>
            </div>

            <button onClick={refreshOptions} className='submit-button'>Refresh</button>
        </div>
    )
}


export default OptionDisplay