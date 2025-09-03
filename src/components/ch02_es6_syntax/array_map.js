function app() {

    function multiply(num) {
        return (num * 10).toFixed(3);
    }

    console.log('자바 스크립트 배열관련 map 함수');
    const numbers = [1, 2, 3, 4, 5];

    const result01 = numbers.map(multiply);
    console.log('result01 : ', result01);

    console.log('비어 있는 배열은 어떻게 되나요?');
    const result02 = [].map(multiply);
    console.log('result02 : ', result02);

    const twotimes = (n) => 2 * n;
    const result03 = numbers.map(twotimes);
    console.log('result03 : ', result03);

    console.log('\n자바 스크립트 Math 객체를 같이 사용해 봅니다.');
    const result04 = numbers.map((num) => Math.sqrt(num));
    console.log('result04 : ', result04);

    const foods = ['라면', '김밥', '떡볶이', '튀김'];

    const result05 = foods.map((food, index) => (
        <li key={index}>맛았는 {food} 좋아요.</li>
    ));
    console.log('result05 : ', result05);

    const result06 = foods.map((food, index) => {
        if (index % 2 === 0) {
            return <li key={index}>맛았는 {food} 좋아요.</li>
        } else {
            return <li key={index}>오늘은 {food} 을 먹습니다.</li>
        }
    });
    console.log('result06 : ', result06);

    const words = ['JavaScript', 'Java', 'Python', 'C', 'C++', 'C#', 'Go', 'Ruby'];
    console.log('화살표 함수와 String 객체의 메서드를 같이 사용해 봅니다.');

    const mylength = 4; // 허용 가능한 문자열의 최대 길이
    let min_length = []; // 비어 있는 배열

    words.map((word) => {
        if (word.length >= mylength) {
            min_length.push(word);
        }
        return 0;
    });

    console.log(`${mylength}자 이상인 문자열 : `, min_length);

    const customers = [
        { firstname: '길동', lastname: '홍', age: 30 },
        { firstname: '영희', lastname: '김', age: 25 },
        { firstname: '철수', lastname: '박', age: 10 },
        { firstname: '짱구', lastname: '신', age: 5 }
    ];

    function getCustomerOne(person, index){
        const isAdult = person.age >= 20 ? '성인' : '미성년자';

        return (
            <li key={index}>
                {person.lastname} {person.firstname}님, 나이 : {person.age}살 {isAdult} 입니다.
            </li>
        );        
    };

    //고객들을 목록 형식으로 만든 컴포넌트
    const CustomerList = () => {
        const mylist = customers.map(getCustomerOne);
        return (
            <ol>
                {mylist}
            </ol>
        );
    }

    //겨울 품목 리스트를 위한 컴포넌트
    const WinterItemList = () => {
        const winter_items = [
            {name : '눈사람', description : '겨울철에 만드는 재미있는 친구'}
            ,{name : '눈썰매', description : '겨울철에 타는 재미있는 도구'}
            ,{name : '스키', description : '겨울철에 타는 신나는 운동'}
            ,{name : '스케이트', description : '겨울철에 타는 멋진 운동'}
        ];

        const itemList = winter_items.map((item, index)=>(
            <li key={index}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
            </li>
        ));

        return (
            <ul>
                {itemList}
            </ul>
        );
    };    

    return (
        <div>
            <h2>단순 출력</h2>
            <ul>
                {result05}
            </ul>
            <h2>양자 택일</h2>
            <ul>
                {result06}
            </ul>
            <h2>고객 리스트</h2>
            <CustomerList/>
            <h2>겨울 품목 리스트</h2>
            <WinterItemList/>
            
        </div>
    );
}

export default app;