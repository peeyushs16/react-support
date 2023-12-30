export const Planet = (props)=>{
    return(
        <div className="App">
            <h1>{props.name}</h1>
            <h1>{props.isGasPlanet}</h1>
        </div>
    )
}