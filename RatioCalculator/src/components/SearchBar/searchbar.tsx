import React from 'react'; //React 라이브러리에서 기본적으로 필요한 React 객체를 임포트
import "./searchbar.css";

interface SearchBarProps { //SearchBarProps 인터페이스를 정의
  value: string; //컴포넌트의 value prop의 타입은 문자열
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; //onChange prop은 input 이벤트를 처리하는 함수
}

// SearchBar 컴포넌트를 정의. props로 SearchBarProps 타입을 사용
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    
  return ( //컴포넌트의 JSX 반환 부분
    <input //input 요소를 생성
      type="text" // 입력 타입을 텍스트로 설정
      placeholder="Search Here" // 입력 필드의 플레이스홀더 텍스트를 설정
      value={value} // input 요소의 값으로 props에서 받은 value를 설정
      onChange={onChange} //input 요소의 onChange 이벤트에 props에서 받은 onChange 함수를 설정
    />
  );
};

export default SearchBar;