import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(0)
    const handleAdd=()=>{
        const newTeam=team+1 
        setTeam(newTeam)
    }
    const handleRemove=()=>{
        const newTeam=team-1 
        setTeam(newTeam)
    }
    return (
        <div style={{border:'2px solid purple',borderRadius:'15px',margin:'10px',padding:'10px'}}>
            <h3>Player:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}