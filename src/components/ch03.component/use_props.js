// ui폴더에 있는 Top02이라는 앱을 나는 Top이라고 부를꺼야 
import Top from './ui/Top02';
import Content from './ui/Content02';
import Bottom from './ui/Bottom02';

function App() {

    const breadList = ["소금빵", "단팥빵", "샌드위치", "도너츠"]
    const coffeeList = ["아메리카노", "카페라떼", "콜드브루", "바닐라라떼"]
    return (
        <div className="App">
            <Top greeting="포레스토 다방" welcome="어세오세요. 우리 매장에서 잼있는 시간 되시길 바랍니다." />
            {/* <Content bread01="소금빵" bread02="단팥빵" bread03="샌드위치" bread04="도너츠" /> */}
            <Content type= "ul" menus={breadList} />
            <hr />
            <Content type = "ol" menus={coffeeList} />
            <Bottom goodbye="안녕히 가세요." comment="다음번에 또 뵙겠습니다." />
        </div>
    );
}

export default App;