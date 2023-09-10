import { useState } from "react"

export default function Count(){
    const [count, setCount]=useState(0)
    const handleAdd=()=>{
       const newCount= count + 1;
       setCount(newCount)
    }
    const handleReduce=()=>{
        const newcount=count-1
        setCount(newcount)
    }
    return (
        <div style={{border:'1px solid tomato', borderRadius:'15px', outline:'none'}}>
        <h3>Count:{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}