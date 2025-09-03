
function App() {

    //ES5 버전
    let string1 = 'Hello';
    let string2 = 'World';
    let greeting = string1 + ' ' + string2;
    console.log('greeting :' + greeting);

    let product = {name:'apple', price:1000}; //상품 객체
    let message = '제품 : ' + product.name + ', 가격 : ' + product.price + '원';
    console.log('message :' + message);

    product = {name:'react', price:30000};    


    let multiline = 'Hello\neveryone';
    console.log(multiline);

    let value1 = 14;
    let value2 = 5;
    let boolValue = false;
    let operation1 = '연산결과 : '+ (value1 * value2);
    let operation2 = '삼항연산자 : ' + (value1 > value2 ? '참' : '거짓');
    console.log(operation1);

    //ES6 버전 - 탬플릿 문자열(Template String)
    let string3 = '여러분';
    let string4 = '환영합니다';
    // template literal는 백틱(`)문자를 사용하여 데이터를 표현하는 방식
    greeting = `${string3}~${string4}`;
    console.log('인사말 :' + greeting);
    
    boolValue = 14 > 5;
    operation1 = `덧셈결과 : ${value1 + value2}`;
    console.log(operation1);
    operation2 = `삼항연산자  : ${boolValue ? '참' : '거짓'}`;

    message = `${product.name}의 가격은qq ${product.price.toLocaleString()}원 입니다.`;
    console.log(operation2);
    console.log(message);

    multiline = `여러분 
안녕하세요`;
    console.log(multiline);

    return (
        <div className="App">
           탬플릿 문자열
        </div>
    );
}

export default App;