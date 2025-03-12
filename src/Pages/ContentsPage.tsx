import { PageProps } from '../App';

function ContentsPage({ handleOnClick }: PageProps) {
  return (
    <div>
      <button onClick={() => handleOnClick('Main')}>초기 화면으로</button>
      <h1>콘텐츠 페이지</h1>
    </div>
  );
}

export default ContentsPage;
