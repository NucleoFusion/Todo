import React from "react";
import TextInput from "./TextInput";
import axios from 'axios';
import $ from 'jquery';
import { Link } from "react-router-dom";


function PostPage(){

    async function postItem(event){
        event.preventDefault();
        await axios.post('http://localhost:3000/post/item', {
            name:$('#name').val(),
            descr:$('#descr').val()
        },{
            headers: {
                'content-type':'application/x-www-form-urlencoded'
            }
        });
    }

    return (
        <div className="PostPage-container">
            <form className="PostPage-form">
                <div className="PostPage-text-container">
                    <h2 className="PostPage-text">Add Item</h2>
                </div>
                <TextInput name='name'/>
                <TextInput name='descr'/>
                <button className="btn btn-primary PostPage-submit-button" type="submit" onClick={postItem}>Submit</button>
            </form>
            <Link to='/'>
                <button className="btn btn-primary goto-button">Home</button>
            </Link>
        </div>
    );
}

export default PostPage;