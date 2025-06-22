
export default function Teacher({teacher}){
  
    console.log(teacher);
    return (
        <div className = "college">
            
            <h2>Teacher Name: {teacher.name}</h2>
            <h4>Class No: {teacher.id}</h4>
            <p>Subject: {teacher.subject}</p>  
        </div>
    )
}