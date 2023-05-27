import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{backgroundColor:"skyblue",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"1rem"
      }}>
        <h1>Movies</h1>
        <h2 style={{marginLeft:"2rem"}}>Favourite</h2>
      </div>
    )
  }
}
