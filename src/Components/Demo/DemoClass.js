import React, { Component, useState } from 'react'
import axios from 'axios'

class DemoClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            demoData: [{}]
        } 
    }
    componentDidMount(){
        axios.get('https://api.publicapis.org/entries')
        .then(response => {
            const jsondata = response.data;
            for(var i= 0; i<jsondata.entries.length; i++){
                this.state.demoData.push(jsondata.entries[i])
            }
            //console.log(entries.count);
            alert(this.state.demoData.length);
            this.setState(this.state.demoData)
        })  
    }
  render() {
    return (
        <table>            
            {
                this.state.demoData.map((entrie) =>
                <tr>
                    <td>{entrie.API}</td>
                    <td>{entrie.Description}</td>
                    <td>{entrie.Auth}</td>
                    <td>{entrie.HTTPS}</td>
                    <td>{entrie.Cors}</td>
                    <td>{entrie.Link}</td>
                    <td>{entrie.Category}</td>
                </tr>
                )
            }
        </table>
        )
  }
}

export default DemoClass