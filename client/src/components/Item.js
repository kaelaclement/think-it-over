import React from 'react';

const Item = props => {
  return (
    <div className="item">
      <h1>{props.name}</h1>
    </div>
  )
}

export default Item;