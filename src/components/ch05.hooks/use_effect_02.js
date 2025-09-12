import { useEffect, useState } from "react";

function App() {

    const imageSize = 200; //이미지 크기
    const imagePath = "/images"; //이미지 경로

    const [count, setCount] = useState(0); // 카운터 변수
    const [twoTimes, setTwoTimes] = useState(0); // 카운터 변수 2배수
    const [another, setAnother] = useState(0); // 카운터의 2배수 + 1
    const [imageIdx, setImageIdx] = useState(0); // 
    const [image, setImage] = useState(`${imagePath}/americano01.png`);

    //타이머에 의하여 랜덤하게 보여줄 이미지 배열
    const imageArray = [
        'americano02.png',
        'americano03.png',
        'ciabatta_01.png',
        'ciabatta_02.png',
    ];

    const TodoSomething = () => {
        console.log('카운트 변수 값 : ' + count);
        setTwoTimes(() => 2 * count); //count의 2배수
        setAnother(() => 3 * count + 1); //count 곱하기 3 더하기 1

        console.log('현재 이미지의 색인 번호 : ' + imageIdx);
        
        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage); //해당이미지 변경
        setImageIdx(imageIdx + 1); //이미지 색인 번호 + 1

        if (imageIdx === (imageArray.length - 1)) { // 배열 범위를 벗어나면 다시 0으로 초기화
            setImageIdx(0);
        }        
    }

    // 최초 1번 화면 갱신(rendering)이 되고 나서, count가 바뀔 때마다 다시 그리기(rendering)를 해줍니다.
    useEffect(TodoSomething, [count]);
    //타이머에 의하여 랜덤하게 보여줄 이미지 배열

    console.log('샘플');

    return (
        <div className="App">
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>카운터</td>
                        <td style={{ border: '1px solid black' }}>{count}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>2 곱하기</td>
                        <td style={{ border: '1px solid black' }}>{twoTimes}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>3곱하기 더하기 1</td>
                        <td style={{ border: '1px solid black' }}>{another}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {/* 화살표 함수를 직접 속성창에 작성할 수 있습니다. */}
            <button onClick={() => { setCount((count) => count + 1) }}>
                &nbsp;카운트 값1 더하기&nbsp;
            </button>
            <br />
            <div>
                <img src={image} alt='이미지 대안' width={imageSize} height={imageSize} />
            </div>
        </div>
    );
}

export default App;