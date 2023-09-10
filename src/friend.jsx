import './friend.css'
import Friends from './friends'
import { useEffect, useState } from 'react'
export default function Friend(){
     // declare a state to hold the data
  const [friend,setFriend]=useState([])
  // use effect with call back and dependancy array
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>setFriend(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends:{friend.length}</h3>
            {/* {
                friend.map(friend=><Friends key={friend.id} friends={friend}></Friends>)
                
            } */
            friend.map(friend=><Friends key={friend.id} friends={friend}></Friends>)
            }
        </div>
    )
}