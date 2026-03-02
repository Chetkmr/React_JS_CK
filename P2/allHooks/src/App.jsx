import React, { useState } from 'react'
import Counter from './Component/Counter'


const App = () => {
  const [counter, setCounter] = useState(1);
  const increaseCounter = () => {
    setCounter(counter + 1);
    console.log("clicked " + counter);
};

  return (
    <>
      <div>App</div>
      <Counter counter={counter} increaseCounter={increaseCounter} />

    </>
  )
}

export default App