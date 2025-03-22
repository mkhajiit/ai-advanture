// 홈 버튼 스타일드 컴포넌트
import styled from 'styled-components';

export const HomeButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  font-size: 0.8rem;
  border-radius: 8px;
  color: white;
  background-color: black;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 480px) {
    width: 6rem;
    height: 3rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }

  @media (min-width: 900px) {
    width: 8rem;
    height: 3.5rem;
    font-size: 1rem;
    border-radius: 12px;
  }
`;
