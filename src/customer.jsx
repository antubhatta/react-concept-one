export default function Customer({customer}){
    const {name, email}=customer
    return (
        <div>
            <h4>Name:{name}</h4>
            <h5>Email:{email}</h5>
        </div>
    )
}