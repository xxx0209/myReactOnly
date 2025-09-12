import { Form, Button, InputGroup } from "react-bootstrap";
import './../css/FormStyle.css';

function App({ onSubmitInsert }) {

    const comment = '등록'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리하세요.

    console.log('샘플');
    /* 개발자가 전송 버튼을 눌러서, 전송 이벤트에 의하여 이함수가 동작합니다. */
    const SubmitedData = (event) => {
        event.preventDefault(); // 폼 기본 제출 막기
        const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitInsert(formData);
    };

    return (
        <div>
            <h2>상품 {comment}</h2>
            <Form action="#" onSubmit={SubmitedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category">
                        <option value="_">카테고리를 선택해 주세요.</option>
                        <option value="bread">빵</option>
                        <option value="beverage">음료수</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">세부 설명</InputGroup.Text>
                    <Form.Control type="textarea" name="description"></Form.Control>
                </InputGroup>
                <div class="d-grid gap-2">
                    <Button type="submit">{comment}</Button>
                </div>
            </Form>
        </div>
    );
}

export default App;