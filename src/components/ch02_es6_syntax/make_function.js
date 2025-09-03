function App() {
    console.log('함수 만들기 예시');
    // console.log(this);  // 일반 함수에서 this는 undefined 입니다.

    //함수 선언문
    function jegob01(a, b) {
        if (b === undefined) {
            console.log('매개 변수에 값 할당이 안 되면 undefined가 됩니다. a : ' + a + ', b : ' + b);
        }

        return (a * a) + (b * b);
    }

    let su01 = 2;
    let su02 = 3;
    let message = `jegob01(${su01}, ${su02}) 실행 결과 : `;

    console.log('--->' + jegob01(5));
    console.log('NaN : Not a Number(숫자가 아님)');

    console.log('\n함수표현식');
    const jegob02 = (a, b) => ((a * a) + (b * b));

    let su03 = 2;
    let su04 = 3;
    message = `jegob01(${su03}, ${su04}) 실행 결과 : `;

    console.log(message + jegob02(su03, su04));

    console.log(jegob02(3));


    return (
        <div className="App">
            <h1>함수 만들기</h1>
            <p>함수를 만드는 여러가지 방법에 대해서 알아 봅니다.</p>
        </div>
    );
}

export default App;