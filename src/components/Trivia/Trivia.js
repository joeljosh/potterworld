import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Fade,Stagger} from 'react-animation-components';
import charactersimg from './images/characters.jpg';
import spellsimg from './images/spells.jpg'


const textstyle ={
    textAlign: 'center',
    padding:'2rem'
  }

const cardtextstyle = {
    textAlign: 'center',
    color: '#0B1D3A',
    fontFamily: 'sans-serif',
    fontSize: '1rem'
}

const cardstyle ={
    border:'none',
    
}

class Trivia extends Component{
    render(){
        return(
           
            <Fade in><Stagger in>
                 <div className='space'></div>
                 <div className='container'>
                <div>
                
                    <h4 style={textstyle}><u>Choose one of the Topics below and lets get started</u></h4>
                
                </div>
                <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <Card style={cardstyle}>
                <Link to={`/trivia/characters`} >
                    <CardImg width="100%" varient="top" src={charactersimg} alt='CHARACTERS' />
                    
                    <CardBody>
                        <CardText style={cardtextstyle} >
                            From the iconic trio of Harry,Ron and Hermionie to Lord Voldemort,each character
                            has a different story to tell.Click to find out how well you know them.
                        </CardText>
                        </CardBody>
                        </Link>
                
                </Card>
                </div>
            <div className="space1"></div>
                <div className="col-12 col-md m-1">
                <Card style={cardstyle}>
                <Link to={`/trivia/spells`} >
                    <CardImg width="100%" varient="top" src={spellsimg} alt='SPELLS' />
                    
                    <CardBody>
                        <CardText style={cardtextstyle} >
                           Your O.W.L.S are coming up! What are you waiting for? Click to find out how well you'd do. 
                        </CardText>
                        </CardBody>
                        </Link>
                    
                
                </Card>
                </div>
               </div>
               
                 </div>
               
            </Stagger></Fade>
        )
    }
}

export default Trivia;