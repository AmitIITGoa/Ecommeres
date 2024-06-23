import React, { useState, useEffect } from 'react';
import Navbar from '../comp/Navbar.jsx';
import Slider from '../comp/Slider';
import Category from '../comp/Category';
import ProductList from '../comp/ProductList';
import NewLetter from '../comp/NewLetter';
import Data from '../comp/Data';
import Category_filter from '../comp/Category_filter';

function Home() {
  const [isTimeoutReached, setIsTimeoutReached] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTimeoutReached(true);
    }, 500); 
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Data />
      {isTimeoutReached ? (
        <>
          <Navbar />
          <Slider />
          <Category_filter />
          <NewLetter />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home;
