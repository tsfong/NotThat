
// Functions
const parseString = (string) => {
    return string.split(/[ ,]+/);  
}

export default function OptionCard(props) {

    let CuisineArray = parseString(props.value.cuisines[0].name)
    let CuisineItems = CuisineArray.map((cuisineItem) => {
        return (
            <li>
                {cuisineItem}
            </li>
        )
    })
    
    return (
        <div class="place-card">
            <div className="restaurant-name">{props.value.name}</div>
            <div className="location">{props.value.zipcode}</div>
            <div class="flexible"><ul className="cuisine-list"> {CuisineItems} </ul></div>
        </div>
    )
}