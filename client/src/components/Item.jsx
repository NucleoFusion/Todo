import React from "react";
import Checkbox from './Checkbox';
import EditButton from "./EditButton";


function Item(props){
    return (
        <div className="item">
            <h4>{props.name}</h4>
            <Checkbox func={props.checkboxFunction} id={props.id}/>
            <p className="Item-paragraph">{`-${props.desc}`}</p>
            <EditButton name={props.name} desc={props.desc} id={props.id}/>
        </div>
    )
}

export default Item;