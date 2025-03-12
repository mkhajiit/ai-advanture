import { useState } from 'react';
import MainPage from './Pages/MainPage';
import ContentsPage from './Pages/ContentsPage';
import styled from 'styled-components';

export interface PageProps {
  handleOnClick: (page: 'Main' | 'Contents') => void;
}
const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;
function App() {
  const [currentPage, setCurrentPage] = useState<'Main' | 'Contents'>('Main');

  const handleOnClick: PageProps['handleOnClick'] = (page: 'Main' | 'Contents') => {
    setCurrentPage(page);
  };
  
  return (
    <Container>
      {currentPage === 'Main' ? (
        <MainPage handleOnClick={handleOnClick} />
      ) : (
        <ContentsPage handleOnClick={handleOnClick} />
      )}
    </Container>
  );
}

export default App;
