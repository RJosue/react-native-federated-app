import React, { useEffect } from 'react';
import MainNavigation from './src/routes/MainNavigation';

const App = () => {
  useEffect(() => {
    console.log('APP2');
  }, []);

  return <MainNavigation />;
};

export default App;
