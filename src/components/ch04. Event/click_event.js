function App() {

    const ClickEvent01 = (event) => {

        console.log('안녕하세요~~ 여러분.');
        console.log(event);
    }

    const ClickEvent02 = (name) => {

        const result = `반갑습니다.~~ ${name}`;
        console.log(result);
    }

    const ClickEvent03 = (su1, su2) => {

        const result = `두수의 합.~~ ${su1 + su2}`;
        console.log(result);
    }

    const ClickEvent04 = (message, event) => {

        const result = `파라메터 정보 : ${message}`;
        console.log(result);

        // 해당 이벤트가 보유하고 있는 속성(Property) 목록을 저장할 배열입니다.
        const eventArray = [];

        for (const evt in event) {
            console.log(evt);
        }

        console.log(eventArray);
    }


    const ClickEvent05 = (event) => {

        const result = `이벤트 발생 요소 : ${event.target.id}`;

        const myid = event.target.id;

        if (myid === 'register') {
            console.log('등록하기');
        } else if (myid === 'cancle') {
            console.log('취소하기');
        } else {
            console.log('기타 사항');
        }

        console.log(result);
    }


    return (
        <div className="App">
            <h2>클릭 이벤트</h2>

            {/* 매개 변수가 0개일때는 함수의 이름만 명시하면 됩니다. */}
            {/* 해당 버튼을 클릭했을때 ClickEvent01 함수가 동작합니다. */}

            <button onClick={ClickEvent01}>매개 변수 0개</button>
            <br />
            <br />
            {/* 매개 변수가 있는 경우 화살표 함수로 둘러 싸야 합니다. */}
            <button onClick={() => ClickEvent02('김규식')}>매개 변수 1개</button>
            <br />
            <br />
            <button onClick={() => ClickEvent03(1, 2)}>매개 변수 2개</button>
            <br />
            <br />
            <button onClick={(event) => ClickEvent04('김규식', event)}>매개 변수 3개</button>
            <br />
            <br />
            <button id="register" onClick={(event) => ClickEvent05(event)}>등록</button>
            <br />
            <br />
            <button id="cancel" onClick={(event) => ClickEvent05(event)}>취소</button>
        </div>
    );
}

export default App;