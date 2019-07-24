import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from './actions/items';
import List from './components/List';
import Home from './components/Home';
import Item from './components/Item';
import ItemForm from './components/ItemForm';
import NavBar from './components/NavBar';
import Missing from './components/Missing';

class App extends React.Component {

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ Home } />
        <Route exact path="/my_list" component={ List } />
        <Route exact path="/new" component={ ItemForm } />
        <Route exact path="/my_list/:itemId" render={ props => {
          const item = items.find(item => item.id.toString() === props.match.params.itemId)
          if (item) {
            return <Item { ...item } />
          } else {
            return <Missing />
          }
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
