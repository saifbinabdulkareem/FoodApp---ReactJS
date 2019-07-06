import React, { Component } from 'react';
import { NormalBtn } from '../helpers/Buttons'
// import logoImg from '../Images/logo.png'

class Homepage extends Component{


    render() {
        return (
            <div style={{marginTop: '150px'}}>
            {/* <h1 style={{color: 'white'}}>Fo</h1> */}
            <br />
            <NormalBtn func={()=>{this.props.history.push('/login')}} color='default' style={{width: '250px', color: 'dodgerBlue'}} text='Login' />
            <br />
            <br />
            <NormalBtn func={()=>{this.props.history.push('/registration')}} style={{color: 'dodgerBlue', width: '250px'}} text='SignUp' />
            </div>
        )
    }
}


export default Homepage