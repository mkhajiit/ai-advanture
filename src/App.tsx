import { useEffect, useState } from 'react';
import MainPage from './Pages/MainPage';
import ContentsPage from './Pages/ContentsPage';
import styled from 'styled-components';
import './GlobalStyle.css';
import { TypeKey } from './constants/MyStyles';

// 상태 업데이트 함수는 void를 반환합니다.
export interface PageProps {
  handleOnClick: (page: 'Main' | 'Contents') => void;
  handleBgImage?: (location: TypeKey) => void;
}
const Container = styled.div<{ $bgImage: string; $isLoading: boolean }>`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100vh;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover; /* 이미지가 컨테이너에 꽉 차도록 설정 */
  background-position: center; /* 이미지가 중앙에 위치하도록 설정 */
  background-color: ${({ $isLoading }) =>
    $isLoading ? '#fff' : 'transparent'}; /* 로딩 중 흰색 배경 */
  position: relative; /* 자식 요소를 절대 위치로 배치할 수 있도록 설정 */
  /* 로딩 상태일 때 상호작용을 막음 */
  pointer-events: ${({ $isLoading }) => ($isLoading ? 'none' : 'auto')};
`;

const LoadingOverlay = styled.div`
  position: absolute; /* 화면을 덮도록 절대 위치 지정 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7); /* 배경이 반투명하게 */
  font-size: 2rem;
  color: #333;
`;

function App() {
  const [currentPage, setCurrentPage] = useState<'Main' | 'Contents'>('Main');
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [bgImage, setBgImage] = useState('img/advanture.jpg');

  const handleOnClick: PageProps['handleOnClick'] = (page: 'Main' | 'Contents') => {
    setCurrentPage(page);
    setBgImage('img/advanture.jpg');
  };

  const handleBgImage = (location: TypeKey) => {
    switch (location) {
      case '숲':
        return setBgImage('img/forest.jpg');
      case '무인도':
        return setBgImage('img/island.jpg');
      case '사막':
        return setBgImage('img/desert.jpg');
      case '설원':
        return setBgImage('img/snow.jpg');
      default:
        return setBgImage('img/advanture.jpg'); // 기본값
    }
  };

  return (
    <Container $bgImage={bgImage} $isLoading={isLoading}>
      {isLoading && <LoadingOverlay>Loading...</LoadingOverlay>} {/* 로딩 중 표시 */}
      {currentPage === 'Main' ? (
        <MainPage handleOnClick={handleOnClick} />
      ) : (
        <ContentsPage handleOnClick={handleOnClick} handleBgImage={handleBgImage} />
      )}
    </Container>
  );
}

export default App;
