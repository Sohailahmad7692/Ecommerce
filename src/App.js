import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shoppage from './pages/shop/shop';
import Signin_signup from '../src/pages/signin_signup/signin_signup'

import './App.css';

import HomePage from './pages/hompage/homepage.jsx';
import Header from './components/header/header'
import { auth,createUserProfileDocument } from './firebase/firebase';




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signin' component={Signin_signup}/>
          </Switch> 
      </div>
    );
  }
 
}

export default App;