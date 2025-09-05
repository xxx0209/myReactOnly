function App() {

    const image_small_size = 90;
    const image_large_size = 400;
    const image_path = '/images'; //이미지 경로

    const KeyboardEvent = (param, event) => {
        console.log(event);
        console.log(`파라메터 : ${param}`);
        console.log(`이벤트 타입 : ${event.type}`);
        console.log(`이벤트 요소 : ${event.target}`);
        console.log(`아스키 코드 : ${event.keyCode}`);
        console.log(`문자열 : ${event.key}`);
        console.log(`Ctrl 키 누름 여부 : ${event.ctrlKey}`);
        console.log(`Alt 키 누름 여부 : ${event.altKey}`);
        console.log(`Shift 키 누름 여부 : ${event.shiftKey}`);

        if (event.keyCode >= 48 && event.keyCode <= 57) {
            console.log('숫자를 입력하셨습니다.');
        } else {
            console.log('숫자가 아닙니다.');
        }

    }

    return (
        <div className="App">
            <h2>키 이벤트</h2>
            Key Down : <input onKeyDown={(event) => KeyboardEvent('hello', event)} 
                            onKeyUp={(event) => KeyboardEvent('hello', event)} />

        </div>
    );
}

export default App;