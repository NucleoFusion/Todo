import React from "react";
import TextInput from "./TextInput";
import axios from 'axios';
import $ from 'jquery';

function PostPage(){

    async function postItem(event){
        event.preventDefault();
        console.log({
            name:$('#name').val(),
            descr:$('#descr').val()
        });
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
            <form>
                <TextInput name='name'/>
                <TextInput name='descr'/>
                <input type="submit" onClick={postItem}/>
            </form>
        </div>
    );
}

export default PostPage;