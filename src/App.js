import React from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar.component';
import DialogsContainer from './components/dialogs/dialogPage/DialogsContainer';
import ProfileContainer from './components/profile/profilePage/ProfileContainer';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login'
import {Route, withRouter } from 'react-router-dom';
import {initializeApp} from './redux/reducers/app-reducer';
import {connect} from 'react-redux'
import { compose } from 'redux';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render(){
        if(!this.props.initialized){
          return "Loding..."
        }
        return (
   
            <div className="app-wrapper">
              <HeaderContainer />
              <Navbar />
              <div className="app-wrapper-content">
                <Route path='/dialogs' render={ () => <DialogsContainer />} exact />
                <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                <Route path='/users' render={ () => <UsersContainer />} />
                <Route path='/login' render={ () => <Login />} />
              </div>

            </div>
      
       )


 }

}
  
const mapStateToProps = (state) => ({ 
  initialized: state.app.initialized
})
export default compose(
              withRouter, 
              connect(mapStateToProps, {initializeApp}))(App);
