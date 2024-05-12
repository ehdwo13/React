/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "점심 추천 맛집";
  let[a, b] = useState(['남자 점심 추천','여자 점심 추천','청소년 점심 추천']);
  let[likeCount, lc]= useState(0);
  return (
    <div className="App">
      <div>
        <div className="black-nav">
          <h4>블로그</h4>
        </div>
        <h4 style={{color : 'red', fontSize : '32px'}}>{post}</h4>
        <div className='list'>
          <h4>{a[0]} <span onClick={()=>{lc(likeCount+1)}}> 좋아요</span> {likeCount} </h4>
          <p>5월 11일</p>
        </div>
        <div className='list'>
          <h4>{a[1]}</h4>
          <p>5월 11일</p>
        </div>
        <div className='list'>
          <h4>{a[2]}</h4>
          <p>5월 11일</p>
        </div>
      </div>
    </div>
  );
}

export default App;
