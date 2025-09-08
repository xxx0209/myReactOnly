//메뉴 목록을 만들어 주는 페이지
//export 키워드는 외부에서 참조 가능하도록 길을 틔워줌
export const menuData = [
    {
        chapter: "ch02. ECMAScript",
        items: [
            { path: "/let_const", label: 'let & const 실습' },
            { path: "/template_string", label: '템플릿 문자열' },
            { path: "/make_subject_list", label: '과목 목록 표시' },
            { path: "/make_function", label: '함수 만들기' },
            { path: "/arrow_function", label: '함수 만들기' },
            { path: "/array_map", label: '배열 맵' },
            { path: "/spread_operator", label: '전개 연산자' },
        ],
    },
    {
        chapter: "ch03. Component",
        items: [
            { path: "/components01", label: '클래스형 컴포넌트' },
            { path: "/components02", label: '함수형 컴포넌트' },
            { path: "/component_separate", label: '컴포넌트 분리' },
            { path: "/file_separator", label: '파일분리' },
            { path: "/use_props", label: 'props 사용하기' },
            { path: "/array_and_table01", label: '테이블 만들기 01' },
            { path: "/array_and_table02", label: '회원정보&게시물' },


        ]
    },
    {
        chapter: "ch04. Event",
        items: [
            { path: "/click_event", label: '클릭 이벤트' },
            { path: "/change_event", label: '체인지 이벤트' },
            { path: "/mouse_event", label: '마우스 이벤트' },
            { path: "/key_event", label: '키 이벤트' },
            { path: "/submit_event", label: 'submit 이벤트' },

        ]
    },
    {
        chapter: "ch05. Hooks",
        items: [
            { path: "/use_state_01", label: '스테이트 실습 01' },
            { path: "/use_state_02", label: '스테이트 실습 02' },
            { path: "/use_state_03", label: '스테이트 실습 03' },

        ]
    },

];