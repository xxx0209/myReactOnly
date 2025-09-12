import { Form, Button, InputGroup } from "react-bootstrap";
import './../css/FormStyle.css';
import { useEffect, useState } from "react";

/*
등록 화면과의 차이점
1. 코멘트 : 등록 -> 수정
2. 수정할 상품 정보가 props로 넘어 와야 합니다.
3. 각 입력 양식에 이전에 기입했던 정보를 미리 넣어 주어야 합니다.
   일반 양식은 value 속성에 명시하면 됩니다.
   콤보 박스는 selected 속성에 명시하면 됩니다.
   라디오 버튼이나 체크 박스는 checked 속성에 명시하면 됩니다.
*/
function App({ product, onSubmitUpdate }) {

    const comment = '수정'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리하세요.

    // 넘겨진 이전 상품 정보를 관리해야 하므로, state로 값을 할당합니다.
    const [formData, setFormData] = useState(product);

    /* 개발자가 수정 버튼을 눌러서, 전송 이벤트에 의하여 이함수가 동작합니다. */
    const SubmittedData = (event) => {
        event.preventDefault(); // 폼 기본 제출 막기
        //const formData = event.target; //전송된 폼 양식 객체 정보
        onSubmitUpdate(formData);
    };

    /* 이 함수(event handler)는 입력 양식의 값이 변경될 때 마다 호출이 됩니다. */
    const InputChange = (event) => {
        const { name, value } = event.target;
        console.log(`이름 : ${name}, 값 : ${value}`);
        console.log(formData);
        /* 전개 연산자를 사용하여 과거 데이터를 보존하되, 신규 바뀐 정보만 다시 갱신하기 */
        /* previous 변수는 리액트가 자동으로 넣어 주는 값으로, 이름은 개발자 마음대로 지정하면 됩니다. */
        setFormData((previous) => ({ ...previous, [name]: value }));
        //setFormData({ ...formData, [name]: value });

        // setFormData((previous) => {
        //     const updated = { ...previous, [name]: value };
        //     console.log('갱신된 값', updated);
        //     return updated;
        // });
    }

    return (
        <div>
            <h2>상품 {comment}</h2>
            <Form action="#" onSubmit={SubmittedData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">ID</InputGroup.Text>
                    <Form.Control type="text" name="tmp_id" value={formData.id} disabled autoComplete="off"></Form.Control>
                    <input type="hidden" name="id" value={formData.id} />
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name" onChange={InputChange} value={formData.name}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price" onChange={InputChange} value={formData.price}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category" onChange={InputChange} value={formData.category}>
                        <option value="_">카테고리를 선택해 주세요.</option>
                        <option value="bread">빵</option>
                        <option value="beverage">음료수</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock" onChange={InputChange} value={formData.stock}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" onChange={InputChange} value={formData.image}></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">세부 설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description" onChange={InputChange} value={formData.description}></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button type="submit">{comment}</Button>
                </div>
            </Form>
        </div>
    );
}

export default App;