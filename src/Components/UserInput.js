import React from "react";

const UserInput = (props) => {

    return (
        <div>
            <input 
                placeholder="Enter your name" 
                type="text" 
                onChange={props.changed}
                value={props.name}
                />
        </div>
    )
}

export default UserInput;