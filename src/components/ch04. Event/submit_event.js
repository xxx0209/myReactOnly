function App() {

    const ChangeTest = (event) => {
        const where = event.target.value;
        console.log(`이동할 페이지 : ${where}`);

        if (where === '-') {
            alert('이동할 페이지를 선택해 주세요.');
        } else {
            document.getElementById('myform').action = where;
            document.getElementById('myform').submit();
        }


    };

    const SubmitTest = (event) => {
        console.log(`이벤트 유형 : ${event.type}`);

        const isChecked = document.getElementById('go').checked;

        if (isChecked === true) {
            alert(`액션  페이지로 이동합니다.`);

        } else {
            alert(`액션  페이지로 이동하지 않습니다.`);
            event.preventDefault(); //이벤트 전파 방지
        }
    };


    return <div className="App">
        <h2>Submit Test</h2>
        <form id="myform" onSubmit={SubmitTest} action={`https://www.naver.com`}>
            <select onChange={ChangeTest}>
                <option value="-">--이동할 곳을 선택해 주세요.</option>
                <option value={`https://www.naver.com`}>네이버</option>
                <option value={`https://www.daum.net`}>다음</option>
                <option value={`https://www.google.com`}>구글</option>
            </select>
            <br />
            <br />
            <input type="text"></input>
            <br />
            <br />
            <input type="checkbox" id="go" />체크 상태일때만 해당 페이지로 이동
            <br />
            <br />
            <input type="submit" value="전송" />
        </form>
    </div>;
}

export default App;