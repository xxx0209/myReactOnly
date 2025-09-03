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

function AppRoutes(){
    return (
        <Routes>
            {/* Route 컴포넌트는 2개의 속성을 가집니다.
                path : URL 경로
                element : 표시할 컴포넌트
            */}
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
        </Routes>
    );
};

export default AppRoutes;