import React, { useState } from 'react'; // useState 훅을 가져옵니다.
import SearchBar from './components/SearchBar/searchbar'; // SearchBar 컴포넌트를 가져옵니다.

const App: React.FC = () => {
  const [search, setSearch] = useState<string>(""); // 검색어 상태를 정의합니다.

  // onChange 핸들러 정의
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value; // 입력 필드의 값을 가져옵니다.
    setSearch(searchValue); // 상태를 업데이트합니다.
    console.log("검색어:", searchValue); // 콘솔에 검색어를 출력합니다.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>레시피 재료비율 계산기</h1>
        <SearchBar 
          value={search} // SearchBar에 value를 전달합니다.
          onChange={handleSearchChange} // onChange 핸들러를 전달합니다.
        />
      </header>
    </div>
  );
}

export default App;
