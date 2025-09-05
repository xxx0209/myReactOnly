function App() {

    const image_small_size = 90;
    const image_large_size = 400;
    const image_path = '/images'; //이미지 경로

    const MouseMoveEvent = (event) => {

        const imageSrc = event.target.src;
        console.log(`현재 이미지 : ${imageSrc}`);

        document.getElementById("large_image").src = imageSrc;



        console.log(event.target.id);


    }

    return (
        <div className="App">
            <h2>마우스 이벤트</h2>
            <p>임의의 이미지에 마우스가 해당 영역으로 들어가면 큰 이미지 영역에 해당 이미지가 보입니다.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={`${image_path}/americano01.png`} alt="아메리카노" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                        {/*  */}
                        <td rowSpan='4' width={image_large_size}>
                            {/* 여기는 큰 이미지가 들어가는 영역입니다. */}
                            <img id="large_image" src={`${image_path}/americano01.png`} width={image_large_size} height={image_large_size} alt="화이트 와인" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/brioche_04.png`} alt="브리오슈" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/croissant_02.png`} alt="크로아상" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/whitewine01.png`} alt="화이트 와인" width={image_small_size} height={image_small_size} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
}

export default App;