import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PostPage from "./PostPage";
import Home from "./Home";

function App(){
    return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<PostPage />} />
            </Routes>
        </Router>
    </>
    );
}

export default App;