import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ItemPreview = props => {
  return (
    <div className="p-2">
      <Button className="p-2" variant="outline-danger" size="sm" onClick={() => props.handleClick(props.id)}>x</Button>
      <Link to={`/my_list/${props.id}`}>{ props.name }</Link>
    </div>
  )
}

export default ItemPreview;