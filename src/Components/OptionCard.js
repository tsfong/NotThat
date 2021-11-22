
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
            <div>Restaurant: {props.value.name}</div>
            <div>Zipcode: {props.value.zipcode}</div>
            <div class="flexible">Cuisines: <ul className="cuisine-list"> {CuisineItems} </ul></div>
        </div>
    )
}