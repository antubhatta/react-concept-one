
import { useEffect, useState } from 'react'
import './customer.css'
import Customer from './customer'
export default function customers(){
    const [customers,setCustomers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setCustomers(data))
    },[])
    return (
        <div className='div'>
            <h3>Customers:{customers.length}</h3>
            {
                customers.map(customers=><Customer key={customers.id} customer={customers}></Customer>)
            }
        </div>
    )
}