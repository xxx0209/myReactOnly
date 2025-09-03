import { Component } from "react";

class App extends Component {
  
    
    
    // rander : 클라이언트가 데이터를 볼 수 있도록 화면에 그려주는 역할
    render() {
    
        return <div className="App">
            <div>클래스 방식(초간단 JSX ㄹ</div>
            <img src="./americano01_bigsize.png" alt="react logo" width='300px' height='300px'/>
            <div>반갑습니다.</div>
        </div>;
    }
}


//외부에서 참조할 수 있도록 내보내기
export default App;