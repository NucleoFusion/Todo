import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PostPage from "./PostPage";
import Home from "./Home";
import EditPage from "./EditPage";

function App(){
    return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<PostPage />} />
                <Route path='/edit' element={<EditPage />} />
            </Routes>
        </Router>
    </>
    );
}

export default App;