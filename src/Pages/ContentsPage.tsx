import { PageProps } from '../App';

function ContentsPage({ handleOnClick }: PageProps) {
  return (
    <div>
      <button onClick={() => handleOnClick('Main')}>초기 화면으로</button>
      <h1>콘텐츠 페이지</h1>
      <h2>선택지 지문</h2>
      <button name='firstButton'>첫번째</button>
      <button name='SecondButton'>두번째</button>
      <button name='ThirdButton'>세번째</button>
    </div>
  );
}

export default ContentsPage;
