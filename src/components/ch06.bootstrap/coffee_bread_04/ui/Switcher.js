// 프로그램 모드(mode)에 따라서 화면을 분기해주는 스위치 앱
import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

function App({ mode, product, onSubmitInsert, onSubmitUpdate }) {
    console.log(`현재 모드 : ${mode}`);

    const onSwitchInsert = (formData) => {
        console.log(formData);
        console.log('등록 버튼 누름(Switcher)');
        onSubmitInsert(formData); // 넘어온 폼 정보를 main 파일로 넘김 
    }

    const onSwitchUpdate = (formData) => {
        console.log(formData);
        console.log('수정 버튼 누름(Switcher)');
        onSubmitUpdate(formData); // 수정된 폼 정보를 main 파일로 넘김 
    }

    switch (mode) {
        case 'detail':
            return <Display product={product} />;
        case 'get_insert': //상품 등록 화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} />;
        case 'get_update': //상품 수정 화면으로 이동
            /* product는 이전에 사용자가 입력했던 데이터로써, 수정하고자 하는 항목입니다. */
            return <UpdateContent product={product} onSubmitUpdate={onSwitchUpdate} />;
        case 'read': //읽기모드
            return <div />;

        default:
            return null;
    }
}

export default App;