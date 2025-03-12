import styled from 'styled-components';
import { MyStyles } from '../constants/MyStyles';

interface IButtonProps {
  map: keyof typeof MyStyles; // map은 MyStyles 객체의 키 값이어야 한다.
}

const Button = styled.button<IButtonProps>`
  background-color: ${({ map }) =>
    MyStyles[map].background}; // MyStyles에서 해당 map에 맞는 background을 가져옴
  color: ${({ map }) => MyStyles[map].color}; // MyStyles에서 해당 map에 맞는 color을 가져옴
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

interface IMap {
  map: keyof typeof MyStyles; // map은 MyStyles 객체의 키 값이어야 한다.
}

function ContentsButton({ map }: IMap) {
  return <Button map={map}>ContentsButton</Button>;
}

export default ContentsButton;
