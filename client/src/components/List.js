import React from "react";
import { connect } from 'react-redux';
import ItemPreview from './ItemPreview';
import ItemForm from './ItemForm';

class List extends React.Component {
  render() {
    return (
      <div>
        
        <ItemForm />

        <ul>
          { this.props.items.map(item => <ItemPreview key={item.id} name={item.name} id={item.id} />) }
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