import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './ListBox.module.css'; // 리스트 스타일을 위한 CSS 모듈입니다.

const ListBoxWithSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어 상태
    const items = Array.from({ length: 11 }, (_, i) => (i + 1).toString()); // 1부터 11까지의 숫자 배열

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // 검색어 업데이트
    };

    // 검색어와 일치하는 항목 필터링
    const filteredItems = items.filter(item => item.includes(searchTerm));

    return (
        <div>
            <SearchBar value={searchTerm} onChange={handleSearchChange} /> {/* SearchBar 사용 */}
            <ul className={styles.list}>
                {filteredItems.map(item => (
                    <li key={item}>{item}</li> // 필터링된 항목 표시
                ))}
            </ul>
        </div>
    );
};

export default ListBoxWithSearch;
