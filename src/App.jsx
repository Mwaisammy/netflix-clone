import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen'
import './App.css';
import { Routes , Route} from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
// import Test from './Test';

function App() {
  // const user = {
  //   name: 'Samuel',  
  // }
   

  const user  = (null);
   

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        // Handle the case where userAuth is not available
      }
    })
    return unsubscribe;

  });
  
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
