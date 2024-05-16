/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//좋아요 갯수 개별
function App() {
  let post = "food";
  let[a, b] = useState(['spagetti','coke','apple','banana']);
  let[likeCount, lc]= useState([0,0,0,0]);
  
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
        <div className="black-nav">
          <h4>BLOG</h4>
        </div>
        <h4 style={{color : 'red', fontSize : '32px'}}>{post}</h4>
        <button onClick={()=>{
          let copy = [...a];
          copy[0] = 'lemonade';
          b(copy);
          }}>변경
        </button>
        <button onClick={()=>{
          let sortCopy = [...a];
          sortCopy.sort();
          b(sortCopy);
        }}>정렬
        </button>
        {/* <button onClick={()=>{
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
          <h4 onClick={()=>{setModal(!modal)}}>{a[0]}</h4>
          <p>5월 11일</p>
        </div> */}
        {
          a.map(function(each,i){
            return (
              <div className='list' key={i}>
              <h4 onClick={()=>{setModal(!modal)}}>{each} </h4><span onClick={()=>{
                let copy = [...likeCount];
                copy[i]+=1;
                lc(copy);
              }}> 좋아요</span> {likeCount[i]}
              <p>5월 11일</p>
            </div>
            )
          })
        }
        {
          modal == true ?  <Modal/> : null
        }
    </div>
  );
}

//하나의 구역(ex = div)만 있어야함 state가져다 못씀
//컴포넌트
//반복적인 html 축약
//큰 페이지들
//자주 변경되는것들
function Modal(){
  return (
    <>
      <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
