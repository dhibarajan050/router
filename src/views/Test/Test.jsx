import React from "react";
import { Link } from "react-router-dom";
function Test() {
  return (
    <div className="home">
      <h1>Test</h1>

      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </div>
  );
}

export default Test;
