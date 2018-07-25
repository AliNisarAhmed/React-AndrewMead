import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div>
      <h2>Below are all my projects, click on a Project to view </h2>
      <Link to="/portfolio/1">Project 1</Link>
      <Link to="/portfolio/2">Project 2</Link>
    </div>
  );
};

export default Portfolio;