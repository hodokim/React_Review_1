import { useState } from 'react';
import './App.css';

function App() {


  let [tmp, tmpChg] = useState(['계양 부대찌개집 햄 푸짐하게 많이줌', '써니도 맛있음 ㅋㅋ', '짱개집은 가지마라'])
  let [good, goodChg] = useState(0)
  return (
    <div className="App">
      <div className="black-nav">
        <h4>생각나는대로..</h4>
      </div>
      {
        tmp.map((x) => {
          return (
            <div className="list">
              <h4>{x} <span onClick={()=>{ goodChg(good+1) }}>💕</span> {good}</h4>
              <p>5월 14일 발행</p>
            </div> 
            )
        })
      }

    </div>
  );
}

export default App;
