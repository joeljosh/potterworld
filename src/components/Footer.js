import React,{Component} from 'react';


const Text = {
    color:'#C3CAD0'
}

class Footer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            text:Text
        };
    }
    render(){
        return(
           
            <div >
      
      <div className="footer fixed-bottom footer-light footer-shadow content container-fluid footer-transparent  ">
            <div className='d-flex justify-content-center'>
        <p  style={this.state.text}>Made with <i className="fa fa-magic fa-lg"></i> By JJ</p>
        </div>
        
    </div>
          </div>
        
      
  
        )
    }
}

export default Footer;