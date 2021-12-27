import React,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './Post.css';
import {useHistory} from 'react-router-dom'

function Posts() {
const {firebase}= useContext(FirebaseContext)
const [Products,setProducts]=useState([])
const {setPostDetails}=useContext(PostContext)
const history=useHistory()
useEffect(()=>{
  firebase.firestore().collection('Products').get().then((snapshot)=>{
    const allPost=snapshot.docs.map((Product)=>{
      return {
        ...Product.data(),
        id:Product.id
      }

       
      
    })
    // console.log(allPost);
    setProducts(allPost)
  })
},[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

         { Products.map(Product=>{
         return  <div
           className="card"
           onClick={()=>{
            setPostDetails(Product)
            history.push('/view')
           }}
         >
           <div className="favorite">
             <Heart></Heart>
           </div>
           <div className="image">
             <img src={Product.url} alt="" />
           </div>
           <div className="content">
             <p className="rate">&#x20B9;{Product.Price}</p>
             <span className="kilometer">{Product.category}</span>
             <p className="name"> {Product.name}</p>
           </div>
           <div className="date">
             <span>{Product.createdAt}</span>
           </div>
         </div>
         })
         
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
