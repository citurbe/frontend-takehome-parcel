import React from 'react';
import './gem.css';

const Gem = props => {
  return (
    <div className="gem-card">
      <a href={props.project_uri} target="blank">
        {props.name}
      </a>
      <p>version: {props.version}</p>
      <button
        className="save-button"
        onClick={() => props.toggleSave(props.name)}
      >
        {props.isSaved ? 'Un-Save' : 'Save'}
      </button>
    </div>
  );
};

export default Gem;
