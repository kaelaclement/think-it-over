import React from 'react';

export default class ItemForm extends React.Component {

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

  render() {
    return (
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} /><br />
        <label htmlFor="price">Price: </label>
        <input type="text" name="price" value={this.state.price} onChange={this.handleOnChange} /><br />
        <label htmlFor="url">Product URL: </label>
        <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} />
      </form>
    )
  }
}