import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';

export default function Signup() {
  const history= useHistory();
  const [username,setUser]=useState("");
  const [userEmail,setEmail]=useState("");
  const [userPhone,setPhone]=useState("");
  const [userPass,setPass]=useState("");
  const {firebase}=useContext(FirebaseContext)

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(userEmail,userPass).then((result)=>{
      console.log(result)
      result.user.updateProfile({displayName:username}).then(()=>{
        console.log("firestore");
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:userPhone

        }).then(()=>{
        
          history.push("/login")

        })
      })
    })


  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUser(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={userEmail}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={userPhone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={userPass}
            onChange={(e)=>setPass(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
