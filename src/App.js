import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import ScrollToTop from './components/scrolltotop'
import './App.css';

class App extends Component {


  componentDidMount() {
    this.props.hideLoader();
  }
  

  render() {
    return (
     
      <BrowserRouter>
       <ScrollToTop>
      <div className="App">
        <Main />
      </div>
      </ScrollToTop>
      </BrowserRouter>
     
    );
  }
}
export default App;
