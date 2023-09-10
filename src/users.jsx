import { useEffect, useState } from "react"





export default function Users(){
    // declare a state to load the data
    const [users, setUsers] = useState([])
    // useEffect with callback and dependancy array
    useEffect(()=>{
        // use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setUsers(data))
    },[])
    return (
        <div>
            <h4>Users: {users.length}</h4>
        </div>
    )
}

