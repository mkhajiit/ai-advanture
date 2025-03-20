import { PageProps } from '../App';
import ContentsButton from '../components/ContentsButton';
import { ButtonContainer, TextContainer } from '../styles/Container';
import { ContentsContainer } from '../styles/ContentsContainer';

function MainPage({ handleOnClick }: PageProps) {
  return (
    <ContentsContainer>
      <TextContainer $firstChoice={'기본'}>
        <img src='img/logo.png' alt='AI 어드벤처' />
      </TextContainer>
      <ButtonContainer>
        <ContentsButton
          firstChoice={'기본'} // myStyles 객체에서 적용시킬 컬러 테마(객체의 키)
          choice={'시작하기'}
          onClick={() => handleOnClick('Contents')}
        />
      </ButtonContainer>
    </ContentsContainer>
  );
}

export default MainPage;
