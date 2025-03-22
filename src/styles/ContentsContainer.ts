// 콘탠츠 컨테이너 스타일드 컴포넌트
import styled from 'styled-components';

export const ContentsContainer = styled.div`
  width: 80%;
  margin: 0 auto; /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 기본적으로 세로 중앙 정렬 */
  overflow: hidden;

  @media (min-width: 480px) {
    margin-top: 3.5rem;
  }

  @media (min-width: 900px) {
  }
`;
