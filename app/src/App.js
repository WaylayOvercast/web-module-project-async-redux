import './App.css';
import React from "react";
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Weather from './Weather';


const App =(props)=> {

  
  
  

  return (

  <>    
    <div className="App">
      <header className="App-header">
      </header>
      <div className='input-card'>
        <h1>Hello, welcome to my simple weather checker!</h1>
        <form >
          <label>please enter your zipcode!</label>
          <input type='number' onChange={'()=>updateForm'} id='zip-code-in' min='2' max='5'/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    </div>
    <Weather/>
  </>
  );
}

const mapStateToProps=()=>{

}

export default connect(mapStateToProps,{})(App);
