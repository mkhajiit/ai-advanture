import styled from 'styled-components';
import { MyStyles, TypeKey } from '../constants';

//MyStyles의 객체를 보고 원하는 색의 테마를 정하는 컨테이너
export const TextContainer = styled.div<{ $firstChoice: TypeKey | null }>`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4rem 2rem;
  font-size: 1.3rem;
  color: ${({ $firstChoice }) => ($firstChoice ? MyStyles[$firstChoice].textColor : 'black')};
  /* 화면 크기가 480px 이상일 때 */
  @media (min-width: 480px) {
    width: 75%; /* 화면 크기가 480px 이상일 때 너비 75%로 설정 */
  }

  /* 화면 크기가 768px 이상일 때 */
  @media (min-width: 768px) {
    width: 70%; /* 화면 크기가 768px 이상일 때 너비 50%로 설정 */
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 기본적으로 버튼들이 세로로 배치되도록 설정 */
  align-items: center;
  width: 90%; /* 모바일에서 90% 너비 */

  /* 화면 크기가 480px 이상일 때 */
  @media (min-width: 480px) and (max-width: 768px) {
    flex-direction: row; /* 모바일 가로 모드에서는 버튼들이 가로로 배치되도록 */
    justify-content: space-between;
    width: 75%;
  }

  /* 화면 크기가 768px 이상일 때 */
  @media (min-width: 768px) {
    width: 50%;
  }
`;
