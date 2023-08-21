import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen'
import './App.css';
import { Routes , Route} from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';


function App() {
  // const user = ('null')
  const user  = useSelector(selectUser);

const dispatch = useDispatch();



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if(user){
        const uid  = user.id;
        const email = user.email;

        dispatch((login({
          uid:user.id,
          email: email,
        })))

        console.log(email)
      }else {
        //when user is not available
        dispatch(logout())
      }
    })

    return ()=>{
      unsubscribe();
    }

  },[dispatch])

  
  return (

    <div className='app'>
    
    <Routes>
      {!user ? (
        <Route path="/" element={<LoginScreen/>}  />
      ) : (

        <>

<Route path="/profile" element={<ProfileScreen/>} />
<Route path="/" element={<HomeScreen/>} />


        </> 
        
      
        
      )}


       

      </Routes>
      </div>

    
  );
}

export default App;
