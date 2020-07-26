import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import Trivia from './Trivia/Trivia';
import RenderTrivia from './Trivia/RenderTrivia'
import Hogwards from './Hogwards/Hogwards.js';
import SortingHat from './Hogwards/sortinghat';
import Explore from './Hogwards/explore'
import {Switch,Route,Redirect} from 'react-router-dom';

import characters from '../shared/characters'
import spells from '../shared/spells'
import houses from '../shared/houses'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component{
    render(){
        const Characters='Characters'
        const Spells = 'Spells'
        return(
            <div>
                <Header />
                <TransitionGroup>
                <CSSTransition classNames="page" timeout={300}>

                <Switch >
                  <Route path='/home' component = {() => <Home />}/>
                  <Route exact path='/trivia'  component = {() => <Trivia />}/>
                  <Route exact path='/hogwards' component = {() => <Hogwards />} />
                  <Route path='/trivia/characters' component = {() => <RenderTrivia Items={characters} subject={Characters}/>} />
                  <Route path='/trivia/spells' component = {() => <RenderTrivia Items={spells} subject={Spells}/>} />
                  <Route path='/hogwards/sortinghat' component = {() => <SortingHat Houses={houses}/>} />
                  <Route path='/hogwards/explore' component = {() => <Explore />} />
                  <Redirect to="/home" />
              </Switch>
              </CSSTransition>
              </TransitionGroup>
              <Footer />
            </div>
        )
    }
}

export default Main;