import { PageProps } from '../App';
import ContentsButton from '../components/ContentsButton';

function MainPage({ handleOnClick }: PageProps) {
  return (
    <div>
      <h1>AI 어드벤처</h1>
      <ContentsButton
        firstChoice={'기본'} // myStyles 객체에서 적용시킬 컬러 테마(객체의 키)
        choice={'시작하기'}
        onClick={() => handleOnClick('Contents')}
      />
    </div>
  );
}

export default MainPage;
