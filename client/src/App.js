import React from 'react';
import './App.css';
import List from './components/List';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import { connect } from 'react-redux';
import Item from './components/Item';
import { getItems } from './actions/items';
import ItemForm from './components/ItemForm';

class App extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props
    return (
      <div className="App">
        {/* <header>
          I'll want a header eventually
        </header> */}
        <Route exact path="/" component={ Home } />
        <Route exact path="/my_list" component={ List } />
        <Route exact path="/new" component={ItemForm} />
        <Route exact path="/my_list/:itemId" render={ props => {
          const item = items.find(item => item.id.toString() === props.match.params.itemId)
          return <Item {...item} />
        }} />
      </div>
    );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
