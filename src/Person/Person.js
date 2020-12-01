import React from "react";

const person = (props) => {
return (
    <div>
        <p>{props.name} like to eat {props.food}</p>   
        <p>{props.children}</p> 
    </div>
)
}

export default person;