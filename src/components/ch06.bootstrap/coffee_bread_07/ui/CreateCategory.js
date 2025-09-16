import { Form, Button, InputGroup } from "react-bootstrap";
import './../css/FormStyle.css';

function App({ onSubmitCategoryAdd }) {

    const comment = '카테고리 추가'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리하세요.

    console.log('샘플');
    /* 개발자가 전송 버튼을 눌러서, 전송 이벤트에 의하여 이함수가 동작합니다. */
    const SubmitedData = (event) => {
        event.preventDefault(); // 폼 기본 제출 막기
        const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitCategoryAdd(formData);
    };

    return (
        <div>
            <h2>상품 {comment}</h2>
            <Form action="#" onSubmit={SubmitedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">영문이름</InputGroup.Text>
                    <Form.Control type="text" name="english"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">한글이름</InputGroup.Text>
                    <Form.Control type="text" name="korean"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">{comment}</Button>
                </div>
            </Form>
        </div>
    );
}

export default App;