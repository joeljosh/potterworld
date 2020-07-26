import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardHeader} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

import hat from './images/sortinghat.png'
import ravenclaw from './images/ravenclaw.jpg';
import Gryffindor from './images/gryffindor.jpg';
import hufflepuff from './images/hufflepuff.jpg';
import slytherin from './images/slytherin.jpeg'


const imgstyle = {
    height:'100%',
    width:'100%',
    textAlign:'center'
}

const loadingimgstyle = {
    height:'16rem',
    width:'16rem',
    textAlign:'center'
}

const textstyle ={
    textAlign: 'center',
    padding:'2rem',
    fontSize: '1.7rem'
  }


const gstyle ={
    border:'none',
    color: 'gold',
    backgroundColor:'#A00000'
   
}

const rstyle ={
    border:'none',
    color: '#0000b3',
    backgroundColor:'silver'
   
}
const hstyle={
    border:'none',
    color: 'black',
    backgroundColor:'darkorange'
}
const sstyle={
    border:'none',
    color: 'green',
    backgroundColor:'black'
}
const cardheadstyle = {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'garamond',
    fontSize: '2.2rem',
    backgroundColor:'#0B1D3A'
}
const cardtextstyle = {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '1.2rem'
}


function RenderHouse({house}){
    var img=''
    var Style
    if(house.name==='Ravenclaw'){
         img=ravenclaw
         Style=rstyle
    }
    else if(house.name==='Gryffindor'){
         img=Gryffindor
        Style=gstyle
    }
    else if(house.name==='Slytherin'){
         img=slytherin
         Style=sstyle
    }
    else if(house.name==='Hufflepuff'){
        img=hufflepuff
        Style=hstyle
    }
  
            return(
              <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <div className="row justify-content-center">
                <div className="col-12 col-md-6 m-1">
                <div className='space'></div>
                <Card style={Style} >
            <CardHeader style={cardheadstyle}><strong>{house.name}</strong></CardHeader>
                
                    <CardImg width="100%" varient="top" src={img} alt='heyy' style={imgstyle}/>
                    
                    <CardBody>
                        <CardText style={cardtextstyle} >
                            <p><strong>Founder:</strong>{house.founder}</p>
                            <p><strong>Traits:</strong>{house.traits}</p>
                            <p><strong>Noticable Members:</strong>{house.members}</p>
                        </CardText>
                        </CardBody>
                       
                
                </Card>
                </div></div>
                </FadeTransform>
                 );}
    



class SortingHat extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: ''
        };
      }
    
      componentDidMount() {
        setTimeout(() => {
            fetch("https://www.potterapi.com/v1/sortingHat")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                item: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }, 3000); 
      }
    
      render() {
        const { error, isLoaded, item } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return (<div className='row justify-content-center'>
          <div className="col-12 col-md-5 ">
          <div className='space'></div>
          <img src={hat} style={loadingimgstyle} ></img>
       
          <p style={textstyle}>Hmm...You are a tough lad to place...<br></br><strong>I KNOW!!!</strong></p>
      </div></div>)
        } else {
           return(
                <div className='row justify-content-center'> 
                 
                    <RenderHouse house={this.props.Houses.filter((house)=> house.name===item)[0]}/>
                </div>
           )
           
          
        }
      }
    }


    export default SortingHat;