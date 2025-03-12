import { PageProps } from '../App';

function MainPage({ handleOnClick }: PageProps) {
  return (
    <div>
      <h1>AI 어드벤처</h1>
      <button onClick={() => handleOnClick('Contents')}>시작하기</button>
    </div>
  );
}

export default MainPage;
