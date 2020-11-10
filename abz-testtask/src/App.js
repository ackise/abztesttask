import './App.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {loadUsersFromServer } from './redux/users/usersActions';
import { loadingPositions } from './redux/positions/positionsActions';
import Sidebar from './components/Menu/Sidebar';


const  App = (props)=> {
  const dispatch = useDispatch()
  const {getUsers,getPositions} = props

  useEffect(() =>{
    getUsers();
    getPositions();
  },[]) 
  const w = window.innerWidth
  console.log(w)
  return (
    <div className="App">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Header/>
        <Body/>
    </div>

  );
}

const mapStateToProps = (state) =>{
  return{
    data: state,
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    getUsers: () => dispatch(loadUsersFromServer()),
    getPositions: ()=> dispatch(loadingPositions())
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
