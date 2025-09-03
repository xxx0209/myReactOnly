// 특정 페이지로 이동을 하기 위하 링크
import {Link} from 'react-router-dom';

// 개발자가 작성한 외부 모듈의 일부를 임포트 합니다.
import AppRoutes from './routes/AppRoutes';
import {memuData} from './routes/menuData';
import './style/App.css';

function App() {

    return (
        <div className="App">
            <h1>React Example Navigation</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>제02장</th>
                        <th>제03장</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <ul>
                            <li><Link to='/let_const'>let & const 실습</Link>
                            </li>
                             <li><Link to='/template_string'>템플릿</Link>
                            </li>
                            <li><Link to='/make_subject_list'>과목</Link>
                            </li>
                            <li><Link to='/make_function'>함수 만들기</Link>
                            </li>
                            <li><Link to='/arrow_function'>화살표함수 만들기</Link>
                            </li>
                            <li><Link to='/array_map'>배열맵</Link>
                            </li>
                            <li><Link to='/spread_operator'>전개 연산자</Link>
                            </li>
                        </ul>                        
                    </td>
                    <td>sss
                    </td>                        
                </tr>
                </tbody>
            </table>
            {/* 라우터 모음 */}
            <AppRoutes/>
        </div>
    );
}

export default App;