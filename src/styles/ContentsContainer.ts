// 콘탠츠 컨테이너 스타일드 컴포넌트
import styled from 'styled-components';

export const ContentsContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  padding-top: 1rem; /* 위쪽 여백 추가 */
  padding-bottom: 1rem; /* 아래쪽 여백 추가 */
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
