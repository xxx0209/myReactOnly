function App() {

    const ChangeEvent = (event) => {

        console.log('안녕하세요~~ 여러분.');
        console.log(event.target.id);

        const target = event.target;
        //console.log(event);

        console.log(`이벤트 유형 : ${event.type}`);
        console.log(`이벤트 발생 요소 : ${event.target.id}`);
        console.log(`이벤트 값 : ${event.target.value}`);

        const target_id = event.target.id;
        const target_value = event.target.value;

        if (target_id === 'input_box') {
            console.log(`입력 상자 내용 : ${target_value}`);
        } else if (target_id === 'menu_select') {
            const ele = document.getElementById("image01");

            console.log(`선택된 콤보 상자 값 : ${target_value}`);
            //alert 함수는 사용자에게 메시지를 일방적으로 보여 주는 창입니다.
            // confirm 함수와 alert 공부하세요.
            if (target_value === '-') {
                ele.src = '';
                alert('보여줄 이미지를 선택해 주셔야 합니다.');
                
                //ele.hidden = true;
            } else {
                //ele.hidden = false;
                ele.src = target_value;
                ele.width = 200;
                ele.height = 200;
            }
        } else {

        }

        // console.log('event.target내에 속성 확인하기');

        // for (const evn in event.target) {
        //     console.log(evn);
        // }

    }

    return (
        <div className="App">
            <h2>체인지 이벤트</h2>

            <input id="input_box" onChange={ChangeEvent} />
            <br />
            <select id="menu_select" onChange={ChangeEvent}>
                <option value="-">항목을 선택해주세요.</option>
                <option value="americano01_bigsize.png">아메리카노</option>
                <option value="french_baguette_01_bigsize.png">프렌치 바게트</option>
                <option value="croissant_03_bigsize.png">크로아상</option>
                <option value="brioche_04_bigsize.png">브리오슈</option>
            </select>
            <br />
            {/* alt 속성은 해당 이미지가 없을때 보여주는 글자를 지정하는 속성입니다. */}
            <img id="image01" src=" " alt="NoImage" />
        </div>
    );
}

export default App;