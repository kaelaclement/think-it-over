import React from "react";
import { connect } from 'react-redux';
import ItemPreview from './ItemPreview';
import { Link } from 'react-router-dom';
import { deleteItem } from '../actions/items';

class List extends React.Component {

  handleClick = itemId => {
    this.props.removeItem(itemId)
  }
  render() {
    return (
      <div>
        
        {/* this should go somewhere else??? */}
        <Link to="/new">Add an item to your wish list</Link>

        <ul>
          { this.props.items.map(item => <ItemPreview key={item.id} name={item.name} id={item.id} handleClick={this.handleClick} />) }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: itemId => dispatch(deleteItem(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);