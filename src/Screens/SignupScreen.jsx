import React, { useRef, useState } from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';

function SignupScreen() {
  
  const [loading, setLoading ] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user registered', user);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setLoading(false);
        console.log('Register error', errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user signed in', user);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('Sign-in error', errorCode, errorMessage);
        setLoading(false);
        alert(errorMessage);
      });
  };


  return (
    <div className='signupScreen'>
      <form style={{
        position: "relative",



      }}>

        {loading && (

        <div className='animation'>
          <ClipLoader
        color='white'
        loading={loading}
      
        size={150}
        
      />
        </div>
        )}

        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn} className={ loading ? 'button__disabled' : 'button'}>
          Sign In
        </button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>
          <span className='signupScreen__link' onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
