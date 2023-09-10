// export default function Friends({friends}){
//     const {id,title}=friends
//     return (
//         <div className="box">
//             <h2>Id:{id}</h2>
//             <h3>Title:{title}</h3>
//         </div>
//     )
// }
export default function Friends({friends}){
   const {id, title}=friends
    return(
        <div>
            <h4>Id:{id}</h4>
            <h3>TItle:{title}</h3>
        </div>
    )
}