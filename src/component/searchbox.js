import React from "react";
const Searchbox =({searchfield, searchChange}) =>{
    return(
        <div>
    <input className ='pa3 ba b--green bg-lighest-blue' 
    type="search" 
    placeholder="Search"
    onChange= {searchChange}
    />
    </div>
    );
}
export default Searchbox;