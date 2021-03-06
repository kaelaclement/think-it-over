import React from 'react';

const Item = props => {
  return (
    <div className="item">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <a target="_blank" rel="noopener noreferrer" href={props.url}>Buy</a><br />
    </div>
  )
}

export default Item;