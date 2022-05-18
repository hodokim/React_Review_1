import { useState } from 'react';
import './App.css';

function App() {


  let [data, dataChg] = useState(['써니도 맛있음 ㅋㅋ', '짱개집은 가지마라', '계양 부대찌개집 햄 푸짐하게 많이줌'])
  let [good, goodChg] = useState(0)
  let [modal, modalChg] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>생각나는대로..</h4>
      </div>
      <button onClick={()=>{
        let copy = [...data];
        copy.sort();
        dataChg(copy)
      }}>가나다 순 정렬</button>
      {
        data.map((x) => {
          return (
            <div className="list">
              <h4 onClick={()=>{
                modal ? modalChg(false) : modalChg(true)
              }}>{x} <span onClick={()=>{ goodChg(good+1) }}>💕</span> {good}</h4>
              <p>5월 14일 발행</p>
            </div> 
            )
        })
      }
      {
        modal ? <Modal></Modal> : null
      }
    

    </div>
  );
}

function Modal(){
  return(
    // 별도의 노드를 추가하지 않고 여러 자식을 그룹화 할 수 있다.fragments 문법이라고 한다.
    <>
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
