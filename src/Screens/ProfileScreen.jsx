import React from 'react'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import "./ProfileScreen.css";

function ProfileScreen() {

  const user = useSelector(selectUser)
  const navigate = useNavigate();
  console.log(user)
  return (
    <div className='profileScreen'>
      <Nav/>

      <div className="profileScreen__body">
          <h1>Edit profile</h1>

          <div className="profileScreen__info">
            <img src="https://i.pinimg.com/550x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="" />

            <div className="profileScreen__details">
              <h2>{user.email}</h2>
             

              <div className="profileScreen__plan">
              <h3>Plans</h3>
                <button onClick={()=>{
                  auth.signOut();
                  navigate("/")
                }}className='profileScreen__signOut'>Sign Out</button>
              </div>
            </div>
          </div>

      </div>

      </div>
  )
}

export default ProfileScreen