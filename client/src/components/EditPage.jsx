import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TextInput from "./TextInput";
import $ from 'jquery';

function EditPage(props){
    let {state} = useLocation();

    async function postItem(event){
        event.preventDefault();
        await axios.post(`http://localhost:3000/patch/${state.id}`, {
            name:$('#name').val(),
            descr:$('#descr').val()
        },{
            headers: {
                'content-type':'application/x-www-form-urlencoded'
            }
        });
    }

    return (
        <div className="EditPage-container">
            <TextInput className='EditPage-TextInput' name='name'/>
            <TextInput className='EditPage-TextInput' name='descr'/>
            <button className="btn btn-primary PostPage-submit-button EditPage-submit" type="submit" onClick={postItem}>Submit</button>
        </div>
    );
}

export default EditPage;