import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 480px) and (max-width: 900px) {
    display: flex;
    align-items: center;
  }
`;
const ReturnButton = styled.button`
  border-radius: 10px;
  background-color: white;
  font-size: 2rem;
`;

export default function ErrorPage({ onClick }: { onClick: (page: 'Main' | 'Contents') => void }) {
  return (
    <Container>
      <h3>에러가 발생했어요</h3>
      <img src='img/oops.png' alt='에러 이미지' />
      <ReturnButton onClick={() => onClick('Main')}>홈화면으로 돌아가기</ReturnButton>
    </Container>
  );
}
