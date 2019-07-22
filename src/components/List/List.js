import React from 'react';
import Gem from '../Gem/Gem';

const List = props => {
  return (
    <div>
      {props.gemList.map(gemData => (
        <Gem
          toggleSave={props.toggleSave}
          key={gemData.name}
          isSaved={props.savedGems.find(gem => gem.name === gemData.name)}
          {...gemData}
        />
      ))}
    </div>
  );
};

export default List;
