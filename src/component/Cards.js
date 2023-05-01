import React from "react";
const Cards =(props) =>{
    return(
    <div className='dib bg-light-green ma2 br3 pa3 grow bw2 shadow -5'>
        <img alt="robots" src= {`https://robohash.org/${props.id}?200x200`}/>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
    </div>


    );
}
export default Cards;