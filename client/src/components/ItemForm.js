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
    this.props.addItem(this.state, this.props.history)
    this.setState({
      name: '',
      description: '',
      price: '',
      url: ''
    })
  }

  render() {
    return (
      <div>
        <h3 className="mt-5">Add to your Think It Over wish list</h3>
        <form onSubmit={this.handleSubmit} className="m-3">
          <input required type="text" className="m-2" name="name" aria-label="product name" placeholder="What I want..." value={this.state.name} onChange={this.handleOnChange} /><br />
          <input required type="text" className="m-2" name="description" aria-label="product description" placeholder="Why I want it..." value={this.state.description} onChange={this.handleOnChange} /><br />
          <input required type="text" className="m-2" name="price" aria-label="product price" placeholder="What it'll cost me..." value={this.state.price} onChange={this.handleOnChange} /><br />
          <input required type="text" className="m-2" name="url" aria-label="product url" placeholder="Where to get it (URL)..." value={this.state.url} onChange={this.handleOnChange} /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (item, history) => dispatch(createItem(item, history))
  }
}

export default connect(null, mapDispatchToProps)(ItemForm);