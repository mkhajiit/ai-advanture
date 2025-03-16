import styled from 'styled-components';

const LoadingOverlay = styled.div`
  position: fixed; /* 화면 전체를 덮도록 변경 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* 반투명 검은색 배경 */
  backdrop-filter: blur(5px); /* 블러 효과 추가 */
  font-size: 2rem;
  color: #fff;
  z-index: 9999; /* 다른 요소 위에 오도록 설정 */
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function CommuLoadingPage() {
  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  );
}

export default CommuLoadingPage;
