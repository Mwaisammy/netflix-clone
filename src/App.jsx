import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import './App.css';
import { Routes , Route} from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen';
// import Test from './Test';

function App() {
  // const user = {
  //   name: 'Samuel',  
  // }
   
  const user  = (null);
   
  
  return (

    <div className='app'>
    
    <Routes>
      {!user ? (
        <Route path="/" element={<LoginScreen/>} />
      ) : (
        <Route path="/" element={<HomeScreen/>} />
      
        
      )}
        

       

      </Routes>
      </div>

    
  );
}

export default App;
