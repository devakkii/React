import React, { useEffect, useState } from 'react'

 function Ue1()
 {
    const [count,setCount] = useState(0)


    useEffect(()=> {
        console.log("render is called");
        // console.log(count);
        document.title=`Button is called ${count} times.`
        
    },[])
   console.log("render");
  return (
    <div>
       <div>
        
        <button onClick={() => setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={ () => setCount(count-1)}>-</button>
    </div>
    </div>
  )
}

export default Ue1