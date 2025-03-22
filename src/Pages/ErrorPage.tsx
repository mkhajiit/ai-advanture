export default function ErrorPage({ onClick }: { onClick: (page: 'Main' | 'Contents') => void }) {
  return (
    <div>
      <h3>에러가 발생했어요</h3>
      <img src='img/oops.png' alt='에러 이미지' />
      <button onClick={() => onClick('Main')}>홈화면으로 돌아가기</button>
    </div>
  );
}
