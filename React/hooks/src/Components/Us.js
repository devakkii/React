import React, { useState } from 'react'

 function Us() {
    const [count,setCount]=useState(0);
    const [visible,setVisibility] = useState(false);

  return (
    
    <div>
        <button onClick={() => setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={ () => setCount(count-1)}>-</button>
    <div>
        <button onClick={() => setVisibility(true)}>Click Here to show text</button>
    </div>
    {
        (visible)?<h2>I am here</h2>:<h2></h2>
    }
  </div>
    )

}

export default Us