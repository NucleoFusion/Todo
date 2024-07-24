import React from "react";
import Checkbox from './Checkbox';

function Item(props){
    return (
        <div className="item">
            <h4>{props.name}</h4>
            <Checkbox />
            <p className="Item-paragraph">{`-${props.desc}`}</p>
        </div>
    )
}

export default Item;