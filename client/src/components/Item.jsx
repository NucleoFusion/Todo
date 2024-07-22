import React from "react";

function Item(props){
    return (
        <div id="Item">
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
        </div>
    )
}