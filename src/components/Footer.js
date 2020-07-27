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
      
      <div className="footer footer-light  footer-shadow  container-fluid  ">
            <div className='d-flex justify-content-center'>
                <div><div className='space1'></div>
                <p  style={this.state.text}>Made with <i className="fa fa-magic fa-lg"></i> By JJ</p>
                </div>
      
        </div>
        
    </div>
          </div>
        
      
  
        )
    }
}

export default Footer;