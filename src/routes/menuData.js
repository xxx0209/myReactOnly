//메뉴 목록을 만들어 주는 페이지
//export 키워드는 외부에서 참조 가능하도록 길을 틔워줌
export const menuData = [
    {
        chapter: "ch01. Basic",
        items: [
            { path: '/make_array_01', label: '배열 실습 01' },
            { path: '/math_object_01', label: 'Math 객체 실습 01' },
            { path: '/if_exercise', label: 'If 구문 실습' },
            { path: '/switch_exercise', label: 'Switch 구문 실습' },
            { path: '/table_exam', label: '테이블예제' },
            { path: '/form_exam', label: '폼예제' },
            { path: '/list_exam', label: '리스트 예제' },
        ]
    },
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
            { path: "/use_state_04", label: '스테이트 실습 04' },
            { path: "/use_effect_01", label: '사용 효과 01' },
            { path: "/use_effect_02", label: '사용 효과 02' },
            { path: "/use_effect_03", label: '사용 효과 03' },
        ]
    },
    {
        chapter: "ch06.bootstrap",
        items: [
            { path: "/coffee_bread_01", label: 'IT Cafe 01' },
            { path: "/coffee_bread_02", label: 'IT Cafe 02' },
            { path: "/coffee_bread_03", label: 'IT Cafe 03' },
            { path: "/coffee_bread_04", label: 'IT Cafe 04' },
            { path: "/coffee_bread_05", label: 'IT Cafe 05' },
            { path: "/coffee_bread_06", label: 'IT Cafe 06' },
            { path: "/coffee_bread_07", label: 'IT Cafe 07' },
        ]
    },


];