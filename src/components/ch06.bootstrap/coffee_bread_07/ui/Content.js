import { Form, Table } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

function App({ contents, onClickToContent, categories, onOrderByClick, orderInfo, onChangeCategory }) {

    /* 테이블 특정 행(row)의 셀(cell) 1개를 클릭했습니다. */
    const ClickItem = (event) => {
        /* 선택한 항목의 부모 요소의 id를 읽어서 할당합니다. */
        const itemId = event.target.parentNode.id; // 상품 아이디
        console.log(`선택된 상품 id : ${itemId}`);

        onClickToContent(itemId); /* 상위 컴포넌트에 해당 id를 넘겨 줍니다. */


        // categories.find((cate)=> cate.english === item.category).korean;
    }

    const ProductList = () => {
        return (
            <tbody>
                {
                    contents.map((item, index) => {
                        const match = categories.find((cate) => cate.english === item.category);
                        console.log('--->' + match);
                        return (
                            <tr id={item.id} key={index}>
                                <td align="center" onClick={ClickItem}>{item.name}</td>
                                {/* 숫자 형식으로 바꾼 다음, 3자리 마다 콤마 유형을 추가합니다. */}
                                <td align="right" onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>
                                <td align="center" onClick={ClickItem}>{match ? match.korean : item.category}</td>
                            </tr>
                        );
                    })
                }

            </tbody>
        );
    };

    /* 사용자가 드롭다운 버튼을 클릭했습니다. 상위 컴포넌트에게 정렬 방식을 알려 주는 함수 입니다.*/
    const ClickButtonGroup = (event) => {
        event.preventDefault();  //이벤트 전파 동작 방지
        const target_id = event.target.id; //이벤트 동작을 일으킨 요소의 unique한 id정보

        // orderColumnList : 정렬할 컬럼 정보와 관련 있는 배열
        const orderColumnList = ['name', 'price', 'category'];

        // 클릭한 항목의 id가 orderColumnList 배열에 포함이 되어 있으면 true를 반환해 줍니다.
        const isColumn = orderColumnList.includes(target_id);

        if (isColumn) { // '정렬할 컬럼' 선택
            onOrderByClick(target_id, orderInfo.ordering);

        } else { //'정렬 방식' 선택
            onOrderByClick(orderInfo.column, target_id);
        }

    };

    // 여러 곳에서 사용되는 문구는 상수(constant) 형태로 작성하여 재활용하면 편리합니다.
    const OrderColum = '정렬할 컬럼';
    const OrderType = '정렬 방식';

    /* 필드 검색 */
    // 넘겨 받은 카테고리 정보를 이용하여 동적으로 콤보 박스에 들어갈 목록들을 생성합니다.
    const comboCategroy = categories.map((item, index) => {
        return <option key={index} value={item.english}>{item.korean}</option>
    });

    /* 사용자가 콤보 박스의 특정 카테고리 항목을 change 했습니다.*/
    const ChangedComboItem = (event) => {
        const changedCategory = event.target.value;

        // 체인지와 관련된 프로스에게 해당 카테고리 정보(영문 이름)을 넘겨 줍니다.
        onChangeCategory(changedCategory);

        

    };

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <td width="10%" valign="middle">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderColum}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성으로 어떠한 항목이 클릭되었는지 파악합니다. */}
                                    {/* 일반적으로 id 속성의 값은 영문 컬럼으로 명명하는 것이 코딩하기에 편리합니다. */}
                                    <Dropdown.Item id="name" onClick={ClickButtonGroup}>이름</Dropdown.Item>
                                    <Dropdown.Item id="price" onClick={ClickButtonGroup}>가격</Dropdown.Item>
                                    <Dropdown.Item id="category" onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성의 이름은 데이터 베이스 정렬과 관련된 용어를 사용했습니다. */}
                                    <Dropdown.Item id="asc" onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                                    <Dropdown.Item id="desc" onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign="middle">
                            <ListGroup horizontal>
                                <ListGroup.Item>{OrderColum} {orderInfo.column}</ListGroup.Item>
                                <ListGroup.Item>{OrderType} {orderInfo.ordering}</ListGroup.Item>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <Form.Select name="category" onChange={ChangedComboItem}>
                    <option value="all">전체 보기</option>
                    {comboCategroy} {/* 동적으로 생성된 콤보 아이템들 */}
                </Form.Select>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                {/* 화살표 함수를 사용하여 상품 목록을 만들어 줍니다. */}
                {ProductList()}
            </Table>
        </>
    );
}

export default App;