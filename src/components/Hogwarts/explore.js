import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardHeader} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

import wand from './images/wand.webp'
import img from './images/img.jpg'

const key='$2a$10$nDezAhuiS62xfSl4I94MMOpZwPLAMVj1o2gvi..IB9fMzFmzh4PL6'


const loadingimgstyle = {
  height:'16rem',
  width:'16rem',
  textAlign:'center'
}

const textstyle ={
  textAlign: 'center',

  fontSize: '2rem'
}

const cardstyle = {
  border:'none',
  backgroundColor:'skyblue'
}

const imgstyle = {
  height:'20rem',
  width:'100%',
  textAlign:'center'
}
const cardtextstyle = {
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: '1.2rem',
  color:'#0B1D3A'
}
const cardheadstyle = {
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'garamond',
  fontSize: '2.2rem',
  backgroundColor:'#0B1D3A'
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



class Explore extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        setTimeout(() => {
            fetch(`https://www.potterapi.com/v1/characters?key=${key}&deathEater=false`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }, 1500); 
      }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (<div> <div className='space'></div>Error: {error.message};</div>)
    } else if (!isLoaded) {
      return (<div className='row justify-content-center'>
      <div className="col-12 col-md-5 ">
      <div className='space'></div>
      <img src={wand} style={loadingimgstyle} ></img>
   
      <p style={textstyle}><strong>"Its the Wand that chooses the Wizard"</strong></p>
  </div></div>);
    } else {

      const x=randomInteger(0,8)
      var c=[]
      var Role
      
        c = items.filter((item)=>{
            if(item.patronus&&item.wand){
              return item
            }
        })[x]

        if(!c.role){
          Role='Minister of Magic'
        }

      return(
        <FadeTransform in transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'}}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 ">    
        <div className='space'></div>
         <Card style={cardstyle} >
            <CardHeader style={cardheadstyle}><strong></strong></CardHeader>
                
                    <CardImg width="100%" varient="top" src={img} alt='heyy' style={imgstyle}/>
                    
                    <CardBody>
                        <CardText style={cardtextstyle} >
                            <p><strong>Wand: </strong>{c.wand}</p>
                            <p><strong>Patronus: </strong>{c.patronus}</p>
                            <p><strong>Role: </strong>{c.role}{Role}</p>
                        </CardText>
                        </CardBody>
                       
                
                </Card>
        </div>
      </div>
      </FadeTransform>)
    }
  }

    
}

export default Explore;