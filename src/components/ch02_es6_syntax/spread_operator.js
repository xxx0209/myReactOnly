function App() {

    let arr01 = ['김의찬', '김민지', '김민성'];
    let arr02 = ['김민재', '김민호', '김민규'];

    let merge01 = [arr01[0], arr02[1], arr02[0], arr02[1]];
    let merge02 = arr01.concat(arr01);
    let merge03 = [].concat(arr01, arr02);

    console.log('merge01 : ' + merge01);
    console.log('merge02 : ' + merge02);
    console.log('merge03 : ' + merge03);

    let arr03 = ['사관', '오렌지'];
    let arr04 = ['복숭아', '키위'];

    console.log('점 기호 3개(...)은 해당 배열 요소를 쭈욱 풀어 해치는 역할을 합니다.')
    let merge04 = [...arr03, ...arr04];


    console.log(arr03);
    console.log(...arr03);
    console.log('merge04 : ' + merge04);

    const arr05 = ['라면', '김밥', undefined, '튀김', '순대', '만두'];
    console.log(arr05);

    let [food1, food2, food3 ='nofood', ...others] = arr05;
    console.log('food1 : ' + food1);
    console.log('food2 : ' + food2);
    console.log('food3 : ' + food3);
    console.log('others : ' + others);
    
    const myCar = { brand: '현대', model: '소나타', color: '흰색'};
    console.log(myCar);

    const myUpdateCar = { type: '중형', year: 2025, color: '검정색'};
    console.log(myUpdateCar);

    const myCarInfo = {myCar, myUpdateCar};
    console.log(myCarInfo);

    return (
        <div className="App">
            전개 연산자
        </div>
    );
}

export default App;