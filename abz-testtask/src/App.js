import './App.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import {loadUsersFromServer } from './redux/users/usersActions';
import { loadingPositions } from './redux/positions/positionsActions';
import Sidebar from './components/Menu/Sidebar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'

const  App = (props)=> {
  // const dispatch = useDispatch()
  const {getUsers,getPositions,modalIsOpen} = props

  useEffect(() =>{
    getUsers();
    getPositions();
  },[]) 

  const w = window.innerWidth
  console.log(w)
  return (
    <div className="App">
      {modalIsOpen ? <Modal/> : null}

        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <Header/>
        <Body/>
        <Footer/>
    </div>

  );
}

const mapStateToProps = (state) =>{
  return{
    data: state,
    modalIsOpen: state.modal.modalIsOpen,
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    getUsers: () => dispatch(loadUsersFromServer()),
    getPositions: ()=> dispatch(loadingPositions())
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
