import React, { Component,useState } from 'react';
import Path from './Path'

import './index.css'

function Watch(){
    const state = useState()

    let t = new Date().toLocaleTimeString()

    const [count,setCount]=useState(t);

    const [count1,setCount1] =useState(t);

    const a=()=>{
        t=new Date().toLocaleTimeString();
        setCount(t);
    }

    const b=()=>{
        t=new Date().toLocaleDateString();
        setCount1(t);
    }

    setInterval(a,1000)
    return(
        <>
            <Path/>

            <h1>{count}</h1>
            <button onClick={b}>Click here to display time</button>

        </>
    );
}
export default Watch;