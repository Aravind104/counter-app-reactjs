import "./Button.css"
function Button(props){
    return(
        <div className="flex-style">
            <button onClick={props.increase} className="btn btn-green">Increase</button>
            <button onClick={props.decrease} className="btn btn-black">Decrease</button>
            <button onClick={props.reset} className="btn btn-red">Reset</button>
        </div>
    )
}
export default Button;