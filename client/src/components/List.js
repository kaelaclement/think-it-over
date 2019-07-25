import React from "react";
import { connect } from 'react-redux';
import ItemPreview from './ItemPreview';
import { deleteItem } from '../actions/items';

class List extends React.Component {

  handleClick = itemId => {
    this.props.removeItem(itemId)
  }
  render() {
    return (
        <div className="d-flex flex-column p-2">
          { this.props.items.map(item => <ItemPreview key={item.id} name={item.name} id={item.id} handleClick={this.handleClick} />) }
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