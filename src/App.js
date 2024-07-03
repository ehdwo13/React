import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "Coding";
  let [a, b] = useState(['리액트','파이선','자바']);
  let [like, likeCount] = useState(0);
  
  function likeBtn(){}

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>
      <button onClick={()=>{
          let copy = [...a];
          copy[0] = "자바스크립트";
          b(copy);
        }}>modify</button>
      <div className='list'>
        <h4>{a[0]}<span onClick={()=>{likeCount(like+1)}}>좋아요</span> {like} </h4>
        <p>7월 3일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>7월 3일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[2]}</h4>
        <p>7월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
