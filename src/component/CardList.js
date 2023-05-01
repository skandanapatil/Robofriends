import React from "react";
import Cards from "./Cards";  
const CardList =({Robot})=>{
    const CardArray =Robot.map((user,i) =>{
        return(<Cards id ={Robot[i].id} name ={Robot[i].name} email ={Robot[i].email} />)    
    })
    return (
<div>
     {CardArray}  
</div>
    );
}

export default CardList;