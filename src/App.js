/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "food";
  let[a, b] = useState(['spagetti','coke','apple']);
  let[likeCount, lc]= useState(0);
  return (
    <div className="App">
      <div>
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <h4 style={{color : 'red', fontSize : '32px'}}>{post}</h4>
        <button onClick={()=>{
          let copy = [...a];
          copy[0] = 'lemonade';
          b(copy);
          }}>변경</button>
        <button onClick={()=>{
          let sortCopy = [...a];
          sortCopy.sort();
          b(sortCopy);
        }}>정렬</button>
        <div className='list'>
          <h4>{a[2]} <span onClick={()=>{lc(likeCount+1)}}> 좋아요</span> {likeCount} </h4>
          <p>5월 11일</p>
        </div>
        <div className='list'>
          <h4>{a[1]} </h4>
          <p>5월 11일</p>
        </div>
        <div className='list'>
          <h4>{a[0]}</h4>
          <p>5월 11일</p>
        </div>
      </div>
    </div>
  );
}

export default App;
