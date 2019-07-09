import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../actions/items';

class ItemForm extends React.Component {

  state = {
    name: '',
    description: '',
    price: '',
    url: ''
  }

  handleOnChange = event => {
    const stateKey = event.target.name
    this.setState({
      [stateKey]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // check that addItem works - it does
    // but now I need to actually persist the new item
    this.props.addItem(this.state)
    this.setState({
      name: '',
      description: '',
      price: '',
      url: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} /><br />
        <label htmlFor="price">Price: </label>
        <input type="text" name="price" value={this.state.price} onChange={this.handleOnChange} /><br />
        <label htmlFor="url">Product URL: </label>
        <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} /><br />
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // change this to call async action
    addItem: item => dispatch(createItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ItemForm);