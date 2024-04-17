import React from "react"; 
import { Link } from "react-router-dom";

function Home() {
    return (
        
        <div>
            <h1>This Is a Home</h1>
            <Link to="/About">About</Link>
        </div>
    );
}
export default Home;