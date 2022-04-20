import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Home</h1>

      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </div>
  );
}

export default Home;
