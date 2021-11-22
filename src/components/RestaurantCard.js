// react
import { useState } from 'react'

// css
import './Zipcode.css';

export default function ZipcodeForm(props) {

    const [zipInput, setZipInput] = useState("")



    // Functions
    function sendZipData(e) {
        e.preventDefault();
        props.zipRequest(zipInput)
    }

    function getZipInputChange(e) {
        setZipInput(e.target.value)
    }



    return (
        <div className = "zipcode-form">
            <form onSubmit={sendZipData}>
                <input onChange={getZipInputChange} className="input-field" placeholder="Zipcode"/>
                <button className="submit-button" >Submit</button>
            </form>
        </div>
    )
}