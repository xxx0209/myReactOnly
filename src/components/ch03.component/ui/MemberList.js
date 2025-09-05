function App() {

    const memberList = [
        {
            id: "hong123",
            name: "홍길동",
            email: "hong123@example.com",
            joinDate: "2024-06-15",
            age: 10
        },
        {
            id: "kimc456",
            name: "김철수",
            email: "kimc456@example.com",
            joinDate: "2024-07-20",
            age: 15
        },
        {
            id: "park789",
            name: "박영희",
            email: "park789@example.com",
            joinDate: "2024-08-05",
            age: 20
        },
        {
            id: "lee101",
            name: "이민수",
            email: "lee101@example.com",
            joinDate: "2024-09-12",
            age: 25
        }
    ];

    // 나이에 따른 성인 여부 
    const getAdult = (age) => {
        if (age < 19) return '미성년';
        if (age >= 19) return '성인';
        return '몰라';
    };

    const trList = memberList.map((member, index) => (
        <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.joinDate}</td>
            <td>{getAdult(member.age)}</td>
            <td>{member.age}</td>
        </tr>
    ));

    return <div>
        <table border={'1px'}>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>가입일</th>
                    <th>나이</th>
                    <th>성인</th>
                </tr>
            </thead>
            <tbody>
                {trList}
            </tbody>
        </table>
    </div>;
}

export default App;