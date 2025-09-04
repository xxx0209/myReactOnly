function App() {

    const breadList = [
        { id: 1, name: "프렌치 바게트", image: "french_baguette_01_bigsize.png", description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", image: "croissant_03_bigsize.png", description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "브리오슈", image: "brioche_04_bigsize.png", description: "프랑스의 전통적인 달콤한 빵으로, 기름과 계란이 많이 들어가서 부드럽고 고소한 맛과 부드러운 식감이 특징입니다." },
        { id: 4, name: "치아바타", image: "whitewine01_bigsize.png", description: "빵 자체는 비교적 폭이 넓은 직사각형 모양을 띠며, 바삭하면서도 촉촉하고 부드러운 식감이 특징입니다." }
    ];

    const trList = breadList.map((bread, index) => (
        <tr key={bread.id}>
            <td>{bread.id}</td>
            <td>{bread.name}</td>
            <td><img src={bread.image} />
                {/* <img src={`http://localhost:3000/${bread.image}`} /> */}
            </td>
            <td>{bread.description}</td>
        </tr>
    ));

    return <div>
        <table border={'1px'}>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이미지</th>
                    <th>세부 설명</th>
                </tr>
            </thead>
            <tbody>
                {trList}
            </tbody>
        </table>
    </div>;
}

export default App;