import React from "react";
import CardList from "../component/CardList";
import Searchbox from "../component/searchbox";
import Scroll from "../component/scroll";
import "./app.css";
class App extends React.Component{
    constructor(){
    super()
    this.state ={
        Robot:[],
        searchfield:''
    }
    }  
    componentDidMount(users){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({Robot:users}))
    }
    onSearchChange =(event)=>{
        this.setState({searchfield: event.target.value})
       
    }  
    render(){
        const {Robot, searchfield}= this.state
        const filterRobots =Robot.filter(Robot=>{
            return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (Robot.length==0){
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className ='tc'>
                <h1 className='f1' >RobotFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList Robot ={filterRobots}/>
                </Scroll>
            </div>
        );}
        }
    
}

export default App;