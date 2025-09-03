import React from 'react';

function App() {

    let header = 'IT 과목';
    let subject = ['HTML', 'CSS', 'JavaScript', 'React'];

    let result = '';
    result += `<h1>${header}</h1>`;
    result += `<ul>`;    
    subject.forEach((item) => {
        result += `<li>${item}</li>`;
    });    
    result += `</ul>`;    

    let result2 = '';
    result2 += `<h1>${header}</h1>`;
    result2 += `<ol>`;    
    subject.forEach((item) => {
        result2 += `<li>${item}</li>`;
    });    
    result2 += `</ol>`;


    console.log(result);
    console.log(result2);

    return (
        <div className="App">
            {/* 보안(XSS) 때문에 기본적으로 모든 내용을 문자열로 보여줍니다. }
            {/* 문자열 형식으로 HTML 태그 형태로 랜더링 하기 */}
            <div dangerouslySetInnerHTML={{ __html: result }}></div>
            <hr/>
            <div dangerouslySetInnerHTML={{ __html: result2 }}></div>
        </div>
    );
}

export default App;