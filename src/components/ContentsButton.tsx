// 타입 꼭 복습
import styled from 'styled-components';
import { MyStyles, TypeKey } from '../constants';

interface IButtonProps {
  $location: TypeKey; // location은 MyStyles 객체의 키 값이어야 한다.
}

const Button = styled.button<IButtonProps>`
  display: block; /* 블록 요소로 만들어 줄바꿈 */
  width: 80%;
  margin: 0.5rem 0;
  height: 4.5rem;
  background-color: ${({ $location }) =>
    MyStyles[$location].background}; // MyStyles에서 해당 location에 맞는 background을 가져옴
  color: ${({ $location }) =>
    MyStyles[$location].btnColor}; // MyStyles에서 해당 location에 맞는 color을 가져옴
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  // 테블릿과 모바일 가로모드
  @media (min-width: 480px) {
    font-size: 0.8rem;
  }

  // 화면 크기가 900px 이상일 때
  @media (min-width: 900px) {
    font-size: 1.4rem;
    height: 7.5rem;
  }
`;

interface IProps {
  firstChoice: TypeKey | null; // location은 MyStyles 객체의 키 값이어야 한다.
  choice: string;
  onClick: () => void; // 버튼 클릭 시 실행될 함수
  imgNumber?: number;
}

function ContentsButton({ firstChoice, choice, onClick, imgNumber }: IProps) {
  const initialBtnTheme = `${choice}${imgNumber}`;
  // 초기값에 맞는 색상을 설정하기 위한 방법
  // 첫번째 장소 선택에 해당하는 색으로 쭉 버튼색을 유지하기 위한 코드
  const buttonColor = firstChoice ? firstChoice : initialBtnTheme;
  // firstChoice ? firstChoice : btnTheme;

  return (
    <Button $location={buttonColor as TypeKey} onClick={onClick}>
      {choice}
    </Button>
  );
}

export default ContentsButton;
