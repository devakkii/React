import React, { useEffect, useState } from 'react'

function Ue2() {

    const [count, setCount]=useState(0);
    const [msg,setMsg]=useState({sayHi:"I am using Hook"})

    useEffect(()=>{
        console.log("render is called");
        document.title=`Button is pressed ${count} times`;

    },[count])

    useEffect(() => {
        console.log("Message is logged");
    },[msg])

   const handleMsg = (e) => {
        //    console.log(e);
        msg.sayHi=e.target.value;
        // console.log(msg.sayHi);
        setMsg({...msg})
    }

  return (
    <div>
 <div>
        
        <button onClick={() => setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={ () => setCount(count-1)}>-</button>
        <input value={msg.sayHi} onChange={handleMsg}></input>
    </div>
    </div>
  )
}
export default Ue2