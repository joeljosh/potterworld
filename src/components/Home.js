import React,{Component} from 'react';
import { Fade, Stagger } from 'react-animation-components';
import main from '../shared/images/main.jpg'

const mainimgstyle ={
    width:'100%',
    height:'22rem'
}
const mainstyle ={
    textAlign: 'center'
}
const textstyle ={
    fontSize:'1.5rem'
  }

class Home extends Component{
    render(){
        return(
            <><div><img src={main} style={mainimgstyle}></img></div>
            <div className='col-12 ' style={mainstyle}>
                <div className="space1"></div>
                <Fade in><Stagger in>
                    <h1 >Welcome To Potterworld</h1><br></br>
                <i className="fa fa-bolt fa-lg"></i>
            <p  style={textstyle}>We have all been there, be it waiting desperately near the window for the owl carrying your letter from Hogwarts to arrive or yelling out spells like Accio, hoping to god that the summoning charm works this time around and then sadly realising that maybe you are not a wizard after all.</p>
            <hr></hr><i className="fa fa-magic fa-lg"></i><br></br>
           <p  style={textstyle}> But that doesn't have to stop you from enjoying the Wizarding World. Get ready to put on the Sorting Hat and flaunt the traits of your House, read up trivia about your favourite characters and discover your Patronus all the while holding your own wand! 
 <hr></hr><strong>Welcome to the World of Harry Potter, Potterheads.</strong></p>  
       
            </Stagger></Fade>
            <div className='space1'> </div>
            </div></>
        )
    }
}


export default Home