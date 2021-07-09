
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import './App.css';
import Comment from './components/comment/comment'

function App() {
  const [comment, setComment] = useState({comment:'', rating:0 });
  const [comments, setComments] = useState([]);
  const [alert, setAlert] = useState('');

  const saveComment = () =>{
    if (comment.comment === ""){
      setAlert("Yorum yazmadınız!")
    }
    else if (comment.rating === 0){
      setAlert("Değerlendirme yapmadınız!")
    }
    else if (comment.comment.length < 3){
      setAlert("Yorumunuz 3 karakterden büyük olmalı!")
    }
    else{
      setComments(prevVal=>{
        return [...prevVal, comment]
      })
      setAlert('')
    }
  };

  const handleInput = (event) => {
    setComment(prevVal => {
      return {...prevVal,comment:event.target.value}
    })
  }

  const ratingChanged = (newRating) => {
    setComment(prevVal => {
      return {...prevVal,rating:newRating}
    })
  };

  
  return (
    <div className="container">
    <h1>Yorumlar</h1>

    { comments.length !== 0 ? 
    comments.map((comment,index) => <Comment key={index} title={comment.comment} rating={comment.rating} />) 
    : <p>Yorum yok</p>}

    <h1>Yorum Ekle</h1>

    
      <input type="text" minLength='3' onChange={(e) => handleInput(e)}/>
      
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
      />

      <input onClick={() => saveComment()} type="submit" value="Submit" />
      {alert!=='' && 
      <h1 style={{color:"red"}}>{alert}</h1>
      }

    </div>
  );
}

export default App;
