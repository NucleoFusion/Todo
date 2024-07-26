import React, { useState,useEffect } from "react";
import Item from './Item';
import axios from "axios";
import {Link} from 'react-router-dom';
import $ from 'jquery';

function Home(){

    const [resultArr,setResultArr] = useState([]);
    useEffect(() => {
        const getData = async () => {
          await axios.get('http://localhost:3000/get/listItems')
          .then(
            response => setResultArr(response.data))
        }
        getData();
      }, []);

      const removeByID = async (id)=>{
        if ($(`#item${id}`).prop('checked') === true){
            setResultArr(resultArr.filter( (obj)=>{
                return obj.id !== id;
            }));
            await axios.post(`http://localhost:3000/delete/${id}`);
        }
      }

    return (
        <div className="HomePage-container">
            <div className="listItems-container">
                {resultArr.map( (obj)=>{
                    return (
                        <>
                            <Item key={obj.id} checkboxFunction={removeByID} id={obj.id} desc={obj.descr} name={obj.name} />
                        </>
                    );
                })}
            </div>
            <div className="goto-button-container">
                <Link to='/add' className="goto-button-link">
                    <button className="btn btn-primary goto-button">Add</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;