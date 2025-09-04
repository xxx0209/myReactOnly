function App({type = "ul", menus}) {   
    //console.log(breads);
    
    const ListTag = type === 'ul' ? 'ul' : 'ol';
    
    return (
        <nav>
            <ListTag>
                {menus.map((menu, index)=>(
                    <li key={index}>
                        <a href={`${index + 1}.html`}>{menu}</a>
                    </li>
                ))}
            </ListTag>
        </nav>
    );
}

export default App;


// function App() {
    
//     return (
//         <nav>
//             <ul>
//                 <li><a href="1.html">프렌치 바케트</a></li>
//                 <li><a href="2.html">크로아상</a></li>
//                 <li><a href="3.html">브리오슈</a></li>
//                 <li><a href="4.html">치아바타</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default App;