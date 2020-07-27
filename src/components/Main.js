import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import Trivia from './Trivia/Trivia';
import RenderTrivia from './Trivia/RenderTrivia'
import Hogwarts from './Hogwarts/Hogwarts.js';
import SortingHat from './Hogwarts/sortinghat';
import Explore from './Hogwarts/explore'
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
                  <Route exact path='/hogwarts' component = {() => <Hogwarts />} />
                  <Route path='/trivia/characters' component = {() => <RenderTrivia Items={characters} subject={Characters}/>} />
                  <Route path='/trivia/spells' component = {() => <RenderTrivia Items={spells} subject={Spells}/>} />
                  <Route path='/hogwarts/sortinghat' component = {() => <SortingHat Houses={houses}/>} />
                  <Route path='/hogwarts/explore' component = {() => <Explore />} />
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