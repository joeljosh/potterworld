import React,{Component} from 'react';
import { Fade, Stagger } from 'react-animation-components';
import main from './main.jpg'

const mainstyle ={
    width:'100%',
    height:'22rem'
}
const textstyle ={
    textAlign: 'center',
    fontSize:'1.5rem'
  }

class Home extends Component{
    render(){
        return(
            <><div><img src={main} style={mainstyle}></img></div>
            <div className='col-12 ' style={textstyle}>
                <div className="space1"></div>
                <Fade in><Stagger in>
                <i className="fa fa-bolt fa-lg"></i>
            <h4 >We have all been there, be it waiting desperately near the window for the owl carrying your letter from Hogwarts to arrive or yelling out spells like Accio, hoping to god that the summoning charm works this time around and then sadly realising that maybe you are not a wizard after all.</h4>
            <hr></hr><i className="fa fa-magic fa-lg"></i><br></br>
           <h4> But that doesn't have to stop you from enjoying the Wizarding World. Get ready to put on the Sorting Hat and flaunt the traits of your House, read up trivia about your favourite characters and discover your Patronous all the while holding your own wand! 
 <hr></hr><strong>Welcome to the World of Harry Potter, Potterheads.</strong></h4>  
       
            </Stagger></Fade>
            <div className='space1'> </div>
            </div></>
        )
    }
}


export default Home