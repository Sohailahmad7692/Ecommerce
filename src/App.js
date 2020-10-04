import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import Shoppage from './pages/shop/shop';
import Signin_signup from '../src/pages/signin_signup/signin_signup'

import './App.css';

import HomePage from './pages/hompage/homepage.jsx';
import Header from './components/header/header'
import { auth,createUserProfileDocument } from './firebase/firebase';
import {setCurrentUser} from './Redux/user/user.action'
import { createStructuredSelector } from 'reselect';
import CheckoutPage from '../src/pages/checkout/checkout';
import {selectCurrentUser} from '../src/Redux/user/userSelect'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shoppage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Signin_signup/>
              )
            }
          /> 
          {/* <Route path='/signin' component={Signin_signup}/> */}
          </Switch> 
      </div>
    );
  }
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);