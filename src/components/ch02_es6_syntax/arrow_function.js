import React from 'react';

function App() {
    console.log('화살표 함수 예시');

    
    const function04 = () => {
        if (name === undefined) {
           return '이름이 없습니다.';
        } else {
            return `hello~~${name}`;
        }
    };

    const name = '김철수';
    console.log('\n매개 변수 1개 짜리');
    console.log(function04(name));

    const function05 = (first, second) => {
        return `${first} 더하기 ${second}는 ${first + second} 입니다.`;
    };

    console.log('\n매개 변수 2개 짜리');
    console.log(function05(3, 4));

    const function06 = (first, second) => (`${first} 더하기 ${second}는 ${first + second} 입니다.`);
   

    console.log('\n중괄호오 return 문이 없는 매개 변수 2개 짜리 화살표 함수');
    console.log(function06(3, 4));

    const adultCheck = (name, age) => {
        let isAdult = age >= 20 ? '성인' : '미성년자';
        const result = `${name}(${age}세)님은 ${isAdult} 입니다.`;
        return result;
    };

    console.log('\n매개 변수 2개 짜리');
    console.log(adultCheck('이제용', 20));
    console.log(adultCheck('홍길동', 40));

    const function07 = (first, second) => {       
        const result = {add:first + second, mul:first*second};
        console.log(result);
        return result;
    };

    console.log(function07(10, 20));
    console.log('대괄호 기호와 key 이름을 이용하여 접근이 가능합니다.');
    console.log(function07(10, 20).add);
    console.log(function07(10, 20)['mul']);

    let answer = function07(30, 40);
    console.log(answer.add);
    console.log(answer.mul);
    
    return (
       
        <div className="App">
            화살표 함수 예시
        </div>
    
    );
}


export default App;