import React from "react";
import { Link } from 'react-router-dom';

const ItemPreview = props => {
  return <li><Link to={`/my_list/${props.id}`}>{ props.name }</Link></li>
}

export default ItemPreview;