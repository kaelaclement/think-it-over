import React from "react";
import { connect } from 'react-redux';
import ItemPreview from './ItemPreview';
import { Link } from 'react-router-dom';

class List extends React.Component {

  handleClick = event => {
    alert('that worked')
  }
  render() {
    return (
      <div>
        
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

export default connect(mapStateToProps)(List);