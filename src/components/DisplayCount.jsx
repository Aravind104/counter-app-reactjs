import "./DisplayCount.css"
function DisplayCount(props){
    return(
        <div className="counter-style">
            <span>{props.counter}</span>
        </div>
    )
}
export default DisplayCount;