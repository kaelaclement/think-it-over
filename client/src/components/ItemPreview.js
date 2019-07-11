import React from "react";
import { Link } from 'react-router-dom';

const ItemPreview = props => {
  return <li><button onClick={props.handleClick}>X</button><Link to={`/my_list/${props.id}`}>{ props.name }</Link></li>
}

export default ItemPreview;