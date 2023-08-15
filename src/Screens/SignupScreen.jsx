import React, { useRef } from 'react';
import './SignupScreen.css';
import { auth } from "../firebase"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'; 
function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  

  const register = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const createWithCredentials = async( email, password) => {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        const user = userCredential.user;
        console.log('user registered', user)
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Register error', errorCode, errorMessage)
        alert(errorMessage);

      })
    }

    createWithCredentials(email,  password)

  
  };
  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // if(!email || !password) {
    //   return;
    // }
   

    console.log(email, password)


    const signInWithCredentials = async( email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        const user = userCredential.user;
        console.log('user signed in', user)
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Sign-in error', errorCode, errorMessage)
        alert(errorMessage);

      })
    }
    signInWithCredentials(email, password)



  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>
          <span className='signupScreen__link' onClick={register}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
