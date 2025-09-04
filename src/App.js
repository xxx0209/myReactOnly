// 특정 페이지로 이동을 하기 위하 링크
import { Link } from 'react-router-dom';

// 개발자가 작성한 외부 모듈의 일부를 임포트 합니다.
import AppRoutes from './routes/AppRoutes';
import { menuData } from './routes/menuData';
import './style/App.css';

function App() {    
    
    return (
        <div className="App">
            <h1>React Example Navigation</h1>
            <table border="1">
                <thead>
                    <tr>
                        {menuData.map((item, index) => (
                            <th key={index}>{item.chapter}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {menuData.map((item, index) => (
                            <td key={index}>
                                <ul >
                                    {item.items.map((info, index) => (
                                    <li key={index}>
                                        <Link to={info.path}>{info.label}</Link>                                        
                                    </li>
                                    ))}
                                </ul>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            {/* 라우터 모음 */}
            <AppRoutes />
        </div>
    );
}

export default App;