import React from "react";
import { Link } from 'react-router-dom'

function EditButton(props){
    return (
        <Link to='/edit' state={{ id:props.id}} >
            <button type="button" className="btn btn-primary">Edit</button>
        </Link>
    );
}

export default EditButton;