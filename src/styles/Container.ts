import styled from 'styled-components';
import { MyStyles, TypeKey } from '../constants';

//MyStyles의 객체를 보고 원하는 색의 테마를 정하는 컨테이너
export const TextContainer = styled.div<{ $firstChoice: TypeKey | null }>`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4rem 2rem;
  font-size: 2rem;
  color: ${({ $firstChoice }) => ($firstChoice ? MyStyles[$firstChoice].textColor : 'black')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
