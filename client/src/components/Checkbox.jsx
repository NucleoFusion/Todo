import React from "react";

function Checkbox(props){
    return (
    <>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" onChange={() => props.func(props.id)} id={`item${props.id}`} />
            <label className="form-check-label">Done?</label>
        </div>
    </>
    );
}

export default Checkbox;