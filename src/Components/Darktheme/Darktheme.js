import React from 'react';


class Darktheme extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        button: true
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState({
        button:!this.state.button
      })
    }
    render(){
      return (
      <div className="container">
        <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}> <i className="far fa-smile"></i> Hi!!</button>  
      </div>
      )
    }
    
  }

  
  export default Darktheme;