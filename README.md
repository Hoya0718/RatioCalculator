# RatioCalculator
** 처음부터 끝까지 혼자 만들어보는 프로젝트 feat.정욱아 잘 써라
---
###typescript-interface예제
interface Person {
  name: string; // 이름: 문자열 타입
  age: number;  // 나이: 숫자 타입
  greet: () => void; // 인사하는 메서드: 반환값이 없는 함수
}

const person: Person = {
  name: "Alice",
  age: 30,
  greet: () => {
    console.log(`안녕하세요, 제 이름은 ${person.name}입니다!`);
  },
};

person.greet();
