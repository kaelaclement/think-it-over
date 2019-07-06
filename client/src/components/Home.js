import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to Think It Over!</h1>
      <p>Find an item you like? Put it on your wish list, give it a week, then come back!</p>
      <Link to="/my_list">Head to your list</Link>
    </>
  )
}

export default Home;