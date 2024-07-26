import React, { useState,useEffect } from "react";
import Item from './Item';
import axios from "axios";
import {Link} from 'react-router-dom';

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

    return (
        <div className="HomePage-container">
            <div className="listItems-container">
                {resultArr.map( (obj)=>{
                    return (
                        <>
                            <Item key={obj.id} id={obj.id} desc={obj.descr} name={obj.name} />
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