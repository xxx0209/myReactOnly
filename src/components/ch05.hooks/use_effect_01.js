import { useEffect, useState } from "react";

function App() {

    const imageSize = 100; //이미지 크기
    const imagePath = "/images"; //이미지 경로
    const interval = 1000; //타이머를 위한 인터벌

    const [count, setCount] = useState(0); // 카운터 변수
    const [image, setImage] = useState(`${imagePath}/americano01.png`);

    //타이머에 의하여 랜덤하게 보여줄 이미지 배열
    const imageArray = [
        'americano02.png',
        'americano03.png',
        'ciabatta_01.png',
        'ciabatta_02.png',
    ];

    const SomeAction = () => {
        console.log('하하하');
        //카운터 변수를 interval 간격으로 1씩 증가시킵니다.
        setCount((count) => count + 1);

        //배열 요소중 임의의 1개를 추출하여 이미지를 보여 줍니다.
        const randomIdx = Math.floor(imageArray.length * Math.random());
        console.log(`randomIdx : ${randomIdx}`);
        const randomImage = imageArray[randomIdx];
        setImage(`${imagePath}/${randomImage}`);

    }

    const MyTimer = () => {
        // setTimeout(동작, 인터벌);
        setTimeout(SomeAction, interval);
    }

    useEffect(MyTimer);

    console.log('샘플');

    return (
        <>
            <h1>카운터 : {count}</h1>
            <div>
                <img src={image} alt='이미지 대안' width={imageSize} height={imageSize} />
            </div>
        </>
    );
}

export default App;