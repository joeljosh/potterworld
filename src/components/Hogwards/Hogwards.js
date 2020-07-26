import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import house from './images/housebg.jpg'
import explore from './images/patronus.jpg'


const cardstyle ={
    border:'none'
   
}
const cardheadstyle = {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'garamond',
    fontSize: '2rem',
    backgroundColor:'#0B1D3A'
}
const cardtextstyle = {
    textAlign: 'center',
    color: '#0B1D3A',
    fontFamily: 'sans-serif',
    fontSize: '1rem'
}
class Hogwards extends Component{
    render(){
        return(
           <Fade in><Stagger in>
                <div className='space'></div>
            <div className='container'>
                 <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <Card style={cardstyle} >
                <CardHeader style={cardheadstyle}>Sorting Hat</CardHeader>
                <Link to={`/hogwards/sortinghat`} >
                    <CardImg width="100%" varient="top" src={house} alt='heyy' />
                    
                    <CardBody>
                        <CardText style={cardtextstyle} >
                           We cant all go to Hogwards to wear the sorting hat.So,here is a better solution.Just sit tight 
                           and hope you get what you  hoped for.<br></br><strong>Click to get sorted.</strong>
                        </CardText>
                        </CardBody>
                        </Link>
                
                </Card>
                </div>
            <div className="space1"></div>
                <div className="col-12 col-md m-1">
                <Card style={cardstyle}>
                <CardHeader style={cardheadstyle}>Explore</CardHeader>
                <Link to={`/hogwards/explore`} >
                    <CardImg width="100%" varient="top" src={explore} alt='heyy' />
                    
                    <CardBody>
                        <CardText style={cardtextstyle} >
                            Imagine you were in Hogwards.Want to know what your wand would be? Or Lets say I even knew which patronus you wold have....<br></br>
                            <strong>Cick to know more. </strong>

                        </CardText>
                        </CardBody>
                        </Link>
                    
                
                </Card>
                </div>
               
               
            </div>
            </div>
            </Stagger>
            </Fade>
        )
    }
}

export default Hogwards;