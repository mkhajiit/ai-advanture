import { useState } from 'react';
import MainPage from './Pages/MainPage';
import ContentsPage from './Pages/ContentsPage';

export interface PageProps {
  handleOnClick: (page: 'Main' | 'Contents') => void;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'Main' | 'Contents'>('Main');

  const handleOnClick: PageProps['handleOnClick'] = (page: 'Main' | 'Contents') => {
    setCurrentPage(page);
  };
  return (
    <div>
      {currentPage === 'Main' ? (
        <MainPage handleOnClick={handleOnClick} />
      ) : (
        <ContentsPage handleOnClick={handleOnClick} />
      )}
    </div>
  );
}

export default App;
