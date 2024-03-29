import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext,FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [fname,setFname]=useState('');
  const [category,setCategory]=useState('');
  const [Price,setPrice]=useState('');
  const [img,setImg]=useState(null);
  const {firebase}=useContext(FirebaseContext);
  const {user} =useContext(AuthContext);
  const date=new Date();
 const history= useHistory()
  const handleSubmit=()=>{
    firebase.storage().ref(`/img/${img.name}`).put(img).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          fname,
          category,
          Price,
          url,
          userId:user.uid,
          createdAt:date.toDateString(),
        })
        history.push("/")
      })
    })


  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={fname}
              onChange={(e)=>setFname(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" 
              value={Price}
              onChange={(e)=>setPrice(e.target.value)}
            type="number" id="fname" name="Price" />
            <br />
  
          <br />
          <img alt="Posts" width="200px" height="200px" src={img ? URL.createObjectURL(img) : ''}></img>
       
            <br />
            <input onChange={(e)=>{
              setImg(e.target.files[0])

            }}type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
