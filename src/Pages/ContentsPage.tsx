import { PageProps } from '../App';
import ContentsButton from '../components/ContentsButton';

function ContentsPage({ handleOnClick }: PageProps) {
  return (
    <div>
      <button onClick={() => handleOnClick('Main')}>초기 화면으로</button>
      <h1>콘텐츠 페이지</h1>
      <h2>선택지 지문</h2>
      <ContentsButton map={'설원'} />
    </div>
  );
}

export default ContentsPage;
