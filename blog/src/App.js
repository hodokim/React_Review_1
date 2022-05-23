import { useState } from 'react';
import './App.css';

function App() {


  let [data, dataChg] = useState(['써니도 맛있음 ㅋㅋ', '짱개집은 가지마라', '계양 부대찌개집 햄 푸짐하게 많이줌'])
  let [good, goodChg] = useState([0,0,0])
  let [modal, modalChg] = useState(false);
  let [title, titleChg] = useState(0);
  let [msg, msgChg] = useState('');
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
        data.map((x,i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                modal ? modalChg(false) : modalChg(true)
                titleChg(i)
              }}>{x} 
                <span onClick={(e) => {
                  e.stopPropagation(); //이벤트 버블링 막기 (좋아요 클릭시 h4도 같이 클릭되어 상세 페이지 열리는 현상을 방지한다.)
                  let copy = [...good];
                  copy[i] += 1;
                  goodChg(copy)
                }}>💕</span> {good[i]}
              </h4>
              <p>5월 14일 발행</p>
              <button onClick={()=>{
                let copy = [...data];
                copy = copy.filter((x,index)=>{                 
                  return index != i ? x : null;
                })
                dataChg(copy);
              }}>글 삭제</button>
            </div> 
            )
        })
      }

      <input onChange={(e)=>{
        let inputMsg = e.target.value;
        msgChg(inputMsg);
      }}></input>
      <button onClick={()=>{
        let copy = [msg,...data];
        dataChg(copy);
      }}>글 발행</button>


      {
        modal ? <Modal title={title} dataChg={dataChg} data={data}></Modal> : null
      }
    

    </div>
  );
}

function Modal(props){
  return(
    // <> 는 별도의 노드를 추가하지 않고 여러 자식을 그룹화 할 수 있다.fragments 문법이라고 한다.
    <>
    <div className="modal">
      <h4>{props.data[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.data];
        copy[0] = '멕시카나 치킨이 개꿀맛임';
        props.dataChg(copy)
        
      }}>글수정</button>
    </div>
    </>
  )
}

export default App;
