// React
import { useState } from 'react'

// Zooms
import Fade from 'react-reveal/Zoom';

// Styling
import './Button.css';

export default function Button(props) {

    // States
    const [reveal, setReveal] = useState(true)

    // Functions
    function hideButton (e) {

        // Hiding the button
        // setReveal(false)

        // Getting button while removing whitespaces
        props.triggerRemove(e.target.innerHTML.replace(/\s/g, ''))
    }

    return (
        <Fade opposite when={reveal} duration={500}>
            <button onClick={hideButton} className="category-button"> {props.context} </button>
        </Fade>
    )
}