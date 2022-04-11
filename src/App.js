import React from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  const [showClock, setShowClock] = React.useState(true);

  function handleShowClock() {
    setShowClock(!showClock);
  }
  return (
    <div className='App'>
      {showClock ? <Clock /> : null}
   <button onClick={handleShowClock}>Show clock</button>
  </div>
  );
}

export default App;
