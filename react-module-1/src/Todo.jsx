export default function Todo({task,isDone}){

    let update;
  
    if(isDone){
        return update = <li>{task} : Done</li>
    }
    else{
        return update = <li>{task} : Not Done</li>
    }
    return update;
   
 }