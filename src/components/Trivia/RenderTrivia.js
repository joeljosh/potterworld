import React,{Component} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Fade, Stagger } from 'react-animation-components';


const textstyle ={
  textAlign: 'center'
}

const FlippyStyle = {
    width: '280px',
    height: '380px',
    padding:'1rem',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '1.55rem',
   
  }


const Card = ({ Item , flipDirection = 'vertical' }) => (
    
    <Flippy
      flipOnClick={true}
      flipDirection={flipDirection}
      style={FlippyStyle}
    >
      <DefaultCardContents Item={Item} />
       
    </Flippy>
  );


  const DefaultCardContents = ({ Item,children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#41669d',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
       {Item.bio}
        
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
          (Question)
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#175852',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        {Item.name}
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
          (Answer)
        </span>
      </BackSide>
    </React.Fragment>);



class RenderTrivia extends Component{
    

    render() {
        const cards = this.props.Items.map((Item) => {
            return(
             <div className='col-12 col-md-3 '>
                <Fade in><Stagger in>
                  <Card Item={Item} />
                </Stagger></Fade>
                
             </div>
            )}) 


        return(
          
          <div>
             <div className='space'></div>
            <div className='ml-1'>
            
            <h4 style={textstyle}>The following are questions related to the {this.props.subject} of the HP universe.
                Guess the answer,Flip the card, and find out if you were right.<hr></hr>
                Hey,no cheating,i'll know ;)</h4>  
       
            
            </div>
               
        <div className='row justify-content-center ml-3'>
            {cards}
        </div>
         </div>
           )
       }
   
    
}

export default RenderTrivia;

