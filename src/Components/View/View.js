import React, { useEffect,useContext, useState } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
   const [userDetails,setUserDetails]=useState()
    const {firebase} =useContext(FirebaseContext)
    const {postDetails} =useContext(PostContext)
    useEffect(()=>{
      firebase.firestore().collection('users').where('id','==',postDetails.userId).get().then((res)=>{
        res.forEach((doc)=>{
          setUserDetails(doc.data())
        })
      })
    })

  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.Price} </p>
          <span>{postDetails.fname}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
