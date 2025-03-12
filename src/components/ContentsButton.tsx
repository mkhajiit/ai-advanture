// 타입 꼭 복습
import styled from 'styled-components';
import { MyStyles, TypeKey } from '../constants/MyStyles';

interface IButtonProps {
  location: TypeKey; // location은 MyStyles 객체의 키 값이어야 한다.
}

const Button = styled.button<IButtonProps>`
  background-color: ${({ location }) =>
    MyStyles[location].background}; // MyStyles에서 해당 location에 맞는 background을 가져옴
  color: ${({ location }) =>
    MyStyles[location].color}; // MyStyles에서 해당 location에 맞는 color을 가져옴
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: block;
`;

interface IProps {
  firstChoice: TypeKey | null; // location은 MyStyles 객체의 키 값이어야 한다.
  choice: string;
  onClick: () => void; // 버튼 클릭 시 실행될 함수
}

function ContentsButton({ firstChoice, choice, onClick }: IProps) {
  // 초기값에 맞는 색상을 설정하기 위한 방법
  // 첫번째 장소 선택에 해당하는 색으로 쭉 버튼색을 유지하기 위한 코드
  const buttonColor = firstChoice ? firstChoice : choice;

  return (
    <Button location={buttonColor as TypeKey} onClick={onClick}>
      {choice}
    </Button>
  );
}

export default ContentsButton;
