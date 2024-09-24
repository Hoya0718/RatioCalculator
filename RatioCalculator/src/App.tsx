import React, { useState } from 'react'; // useState 훅을 가져옵니다.
import SearchBar from './components/SearchBar/SearchBar'; // SearchBar 컴포넌트를 가져옵니다.
import ListBox from './components/ListBox/ListBox';
import PlusBtn from './components/PlusBtn/PlusBtn';
const App: React.FC = () => {
  const [search, setSearch] = useState<string>(""); // 검색어 상태를 정의합니다.
  const [title,setTitle] = useState<string>('레시피 재료비율 계산기');
  const [clicked, setClicked] = useState<boolean>(false);
  const changeH1 = () => {
    
    if(!clicked){
      setTitle('잘 써라 ㅋㅋ');
      console.log(clicked);
    }
    else{
      setTitle('레시피 재료비율 계산기');
      console.log(clicked);
    }
    setClicked(prev => !prev);
  }
  // onChange 핸들러 정의
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value; // 입력 필드의 값을 가져옵니다.
    setSearch(searchValue); // 상태를 업데이트합니다.
    console.log("검색어:", searchValue); // 콘솔에 검색어를 출력합니다.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <button onClick={changeH1}>클릭하지 마시오</button>
        <br/>
        <br/>
        <br/>
        <PlusBtn></PlusBtn>
      </header>
      <section>
        <ListBox></ListBox>
      </section>
    </div>
  );
}

export default App;
