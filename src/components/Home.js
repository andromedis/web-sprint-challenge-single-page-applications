import React from 'react';
import Route, { useHistory } from 'react-router-dom';

function Home(props) {

  const history = useHistory();

  const routeToForm = () => {
    history.push('/pizza');
  }

  return (
    <div>
      <div className='banner'>
        <div className='tagline'>Your favorite food, delivered while coding</div>
        <button onClick={routeToForm}>Pizza?</button>
      </div>
    </div>
  );
}

export default Home;