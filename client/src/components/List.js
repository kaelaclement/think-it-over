import React, { Component } from "react";
import { connect } from 'react-redux';
import { getItems } from '../actions/items';
import ItemPreview from './ItemPreview';

class List extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <ul>
        { this.props.items.map(item => <ItemPreview key={item.id} name={item.name} />) }
      </ul>
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
    getItems: () => dispatch(getItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);