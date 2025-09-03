function App() {
  let su = 10;
  su += 3;
  console.log('su :' + su)

  let str = 'Hello React';
  str += '!!!';
  console.log('str :' + str);

  let arr = []; //empty array
  arr = [10, 20, 30]; //배열은 대괄호를 사용
  console.log('arr :' + arr);

  let obj = {name:'hong', password:'aabc123',age:30}; //empty object
  //obj = {};
  console.log('obj :' + obj);
  console.log(obj);

  //중괄호를 block라고 부른다.
  if(true){
    let x1 = 10;
    var x2 = 20;
  }

  //console.log('x1 :' + x1); //x1 is not defined
  console.log('x2 :' + x2); //20

  const su2 = 10;
  // su2 += 3;
  // console.log('su2 :' + su2);

  const str2 = 'hohoho';
  // str2 += 'hehehe';
  // console.log('str2 :' + str2);

  const arr2 = [100,200,300];
  arr2[0] = 500;
  console.log('arr2 :' + arr2);

  const obj2 = {name:'kim', age:20};
  obj2.name = 'lee';
  console.log('obj2 :' + obj2.name);


  return (
    <div className="App">
      ECMAScript
    </div>
  ); 
}

export default App;
