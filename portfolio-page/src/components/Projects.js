import React from 'react';

const Projects = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <h2>Page for the Project with id of { id }</h2>
    </div>
  );
}

export default Projects;