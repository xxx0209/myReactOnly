//넘겨진 프로퍼티는 () 내에 적어 주면 됩니다.
function App({greeting, welcome}) {

    return (
        <div className="App">
            <h1>{greeting}</h1>
            <p>{welcome}</p>
        </div>
    );
}

export default App;