import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
          tasks:["Revise js", "Revise DSA","Revise Java"],
          currtask:"",
        }
    }
   addHandler =()=>{
    this.setState
   ( {tasks:[...this.state.tasks,this.state.currtask]})
   }
    currtaskHandler = (e)=>{
          console.log(e.target.value);
          this.setState(
            {
              currtask:e.target.value,
            }
          )
    }

    deleteHandler =()=>{
      
    }
  render() {
    return (

      <div>
        <input type="text" placeholder='Enter Your Name' onChange={this.currtaskHandler}/>
        <button onClick={this.addHandler}>Add</button>
        {
          this.state.tasks.map((task)=>{
                      return(
                        <li>
                        <p>{task}</p>
                        <button onClick={deleteHandler}>Delete</button>
                      </li>
                      
                      )
          })
        }
       


      </div>
    )
  }
}
