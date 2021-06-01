import React, { useState } from 'react';

const App = () => {

  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }

  setInterval(UpdateTime,1000)
 
  return(
    <>
      <h1> {newTime} </h1>
    </> 

  );
}

export default App;