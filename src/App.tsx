// 반드시 리펙토링과 코드리뷰 해야함
import { useState, useEffect } from 'react';
import MainPage from './Pages/MainPage';
import ContentsPage from './Pages/ContentsPage';
import styled from 'styled-components';
import './GlobalStyle.css';
import { TypeKey } from './constants';

export interface PageProps {
  handleOnClick: (page: 'Main' | 'Contents') => void;
  handleBgImage?: (location: TypeKey) => void;
}

// url() 은 onload로 미리 다운받은 후에 실행되기 때문에 이미 로드된 이미지를 가져와 사용하게 된다.
const Container = styled.div<{ $bgImage: string; $isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${({ $isLoading, $bgImage }) => ($isLoading ? 'none' : `url(${$bgImage})`)};
  background-size: cover;
  background-position: center;
  background-color: ${({ $isLoading }) => ($isLoading ? '#fff' : 'transparent')};
  position: relative;
  pointer-events: ${({ $isLoading }) => ($isLoading ? 'none' : 'auto')};
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  color: #333;
`;

function App() {
  const [currentPage, setCurrentPage] = useState<'Main' | 'Contents'>('Main');
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [bgImage, setBgImage] = useState('img/advanture.jpg');
  const [isImageLoaded, setIsImageLoaded] = useState(false); // 이미지 로딩 상태
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]); // 로드된 이미지 리스트(캐시)

  // 배경 이미지를 미리 로드(preload)하고, 로드가 완료될 때까지 로딩 화면을 표시하는 역할
  useEffect(() => {
    const preloadImage = (src: string) => {
      setIsImageLoaded(false); // 이미지 로딩 시작 전 상태를 false로 설정
      setIsLoading(true); // 로딩 상태를 true로 설정하여 로딩 화면을 표시
      // 캐시에 저장된 이미 로드된 이미지라면 다시 로드하지 않도록 처리
      if (preloadedImages.includes(src)) {
        setIsImageLoaded(true); // 로딩 완료 상태로 설정
        setIsLoading(false); // 이미지 로딩이 완료되면 로딩 상태를 false로 설정
        return;
      }

      //javascript 문법 img 객체 생성
      const img = new Image();
      img.src = src;
      // 이미지가 다운로드된 후 "사용할 수 있는 상태" 가 되어야 onload 이벤트가 실행
      img.onload = () => {
        // 이미지를 로드한 후 로드된 이미지 목록에 추가하고, 로딩 상태를 변경
        setPreloadedImages((prev) => [...prev, src]);
        setIsImageLoaded(true);
        setIsLoading(false); // 이미지 로딩이 완료되면 로딩 상태를 false로 설정
        console.log('이미지 다운 완료');
      };
    };

    preloadImage(bgImage); // bgImage가 변경될 때마다 미리 로딩
  }, [preloadedImages, bgImage]); // 변경이 발생하면 실행 됨

  const handleOnClick: PageProps['handleOnClick'] = (page: 'Main' | 'Contents') => {
    setCurrentPage(page);
    setBgImage('img/advanture.jpg'); // 기본 이미지
  };

  const handleBgImage = (location: TypeKey) => {
    switch (location) {
      case '숲':
        setBgImage('img/forest.jpg');
        break;
      case '무인도':
        setBgImage('img/island.jpg');
        break;
      case '사막':
        setBgImage('img/desert.jpg');
        break;
      case '설원':
        setBgImage('img/snow.jpg');
        break;
      default:
        setBgImage('img/advanture.jpg');
    }
  };

  return (
    <Container $bgImage={bgImage} $isLoading={!isImageLoaded}>
      {isLoading && <LoadingOverlay>Loading...</LoadingOverlay>}
      {currentPage === 'Main' ? (
        <MainPage handleOnClick={handleOnClick} />
      ) : (
        <ContentsPage handleOnClick={handleOnClick} handleBgImage={handleBgImage} />
      )}
    </Container>
  );
}

export default App;
