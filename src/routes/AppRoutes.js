// 'react-router-dom'은 라우팅을 위한 라이브러리입니다.
// npm install react-router-dom 엔터
import { Route, Routes } from 'react-router-dom';


// ch02장
// import 앱이름 from '전체경로/파일명'
import AppLetConst from './../components/ch02_es6_syntax/let_const';
import AppTemplateString from './../components/ch02_es6_syntax/template_string';
import AppMakeSubjectList from './../components/ch02_es6_syntax/make_subject_list';
import AppMakeFunction from './../components/ch02_es6_syntax/make_function';
import ArrowFunction from '../components/ch02_es6_syntax/arrow_function';
import ArrayMap from '../components/ch02_es6_syntax/array_map';
import AppSpreadOperator from '../components/ch02_es6_syntax/spread_operator';

//ch03
import AppClassComponent from '../components/ch03.component/components01';
import AppFuntionComponent from '../components/ch03.component/components02';
import AppComponentSeparate from '../components/ch03.component/component_separate';
import AppUseProps from '../components/ch03.component/use_props';
import AppFileSeparator from '../components/ch03.component/file_separator';
import AppArrayAndTable01 from '../components/ch03.component/array_and_table_01';

import AppArrayAndTable02 from '../components/ch03.component/array_and_table_02';
import AppClickEvent from '../components/ch04. Event/click_event';
import AppChangeEvent from '../components/ch04. Event/change_event';
import AppMouseEvent from '../components/ch04. Event/mouse_event';
import AppKeyEvent from '../components/ch04. Event/key_event';
import AppSubmitEvent from '../components/ch04. Event/submit_event';

import AppUseState01 from '../components/ch05.hooks/use_state_01';
import AppUseState02 from '../components/ch05.hooks/use_state_02';
import AppUseState03 from '../components/ch05.hooks/use_state_03';
import AppUseState04 from '../components/ch05.hooks/use_state_04';
import AppUseEffect01 from '../components/ch05.hooks/use_effect_01';

function AppRoutes() {

    return (
        <Routes>
            {/* Route 컴포넌트는 2개의 속성을 가집니다.
                path : URL 경로
                element : 표시할 컴포넌트
            */}
            <Route path="/" element={<AppLetConst />} />
            <Route path="/let_const" element={<AppLetConst />} />
            <Route path="/template_string" element={<AppTemplateString />} />
            <Route path="/make_subject_list" element={<AppMakeSubjectList />} />
            <Route path="/make_function" element={<AppMakeFunction />} />
            <Route path="/arrow_function" element={<ArrowFunction />} />
            <Route path="/array_map" element={<ArrayMap />} />
            <Route path="/spread_operator" element={<AppSpreadOperator />} />

            <Route path="/components01" element={<AppClassComponent />} />
            <Route path="/components02" element={<AppFuntionComponent />} />
            <Route path="/component_separate" element={<AppComponentSeparate />} />
            <Route path="/use_props" element={<AppUseProps />} />
            <Route path="/file_separator" element={<AppFileSeparator />} />
            <Route path="/array_and_table01" element={<AppArrayAndTable01 />} />

            <Route path="/array_and_table02" element={<AppArrayAndTable02 />} />
            <Route path="/click_event" element={<AppClickEvent />} />
            <Route path="/change_event" element={<AppChangeEvent />} />
            <Route path="/mouse_event" element={<AppMouseEvent />} />
            <Route path="/key_event" element={<AppKeyEvent />} />
            <Route path="/submit_event" element={<AppSubmitEvent />} />

            <Route path="/use_state_01" element={<AppUseState01 />} />
            <Route path="/use_state_02" element={<AppUseState02 />} />
            <Route path="/use_state_03" element={<AppUseState03 />} />
            <Route path="/use_state_04" element={<AppUseState04 />} />
            <Route path="/use_effect_01" element={<AppUseEffect01 />} />




        </Routes>
    );
};

export default AppRoutes;