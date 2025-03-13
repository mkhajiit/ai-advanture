// 브라우저 스타일드 컴포넌트가 dom에 전달되지 않는 오류 발생
// styled-components는 props에 $를 붙여서 전달된 props를 DOM에 전달하지 않도록 할 수 있다. 이를 transient props라고 함.
import { useState } from 'react';
import { PageProps } from '../App';
import ContentsButton from '../components/ContentsButton';
import { MyStyles, TypeKey } from '../constants/MyStyles';
import styled from 'styled-components';

const Container = styled.div``;

const TextContainer = styled.div<{ $firstChoice: TypeKey | null }>`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  margin: 4rem 2rem;
  font-size: 2rem;
  color: ${({ $firstChoice }) => ($firstChoice ? MyStyles[$firstChoice].color : 'black')};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 버튼을 세로로 나열 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%; /* 부모 컨테이너도 전체 너비 사용 */
`;

function ContentsPage({ handleOnClick, handleBgImage }: PageProps) {
  const initialChoices = ['숲', '무인도', '사막', '설원'];
  const initialText = '모험을 떠날 장소를 선택하세요';
  const [text, setText] = useState(initialText);
  const [choices, setChoices] = useState(initialChoices);
  const [firstChoice, setFirstChoice] = useState<TypeKey | null>(null);
  const [stage, setStage] = useState(1);

  // 첫 번째 선택지를 클릭했을 때 선택된 색상을 저장
  const handleChoiceClick = (choice: string) => {
    if (stage === 1) {
      setFirstChoice(choice as TypeKey);
      if (handleBgImage) {
        // handleBgImage가 undefined가 아니면 호출 undefined일때 예외처리
        handleBgImage(choice as TypeKey);
      }
    }
    setStage((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={() => handleOnClick('Main')}>초기 화면으로</button>
      <Container>
        <TextContainer $firstChoice={firstChoice}>{text}</TextContainer>
        <ButtonContainer>
          {choices.map((choice, index) => (
            <ContentsButton
              key={index}
              firstChoice={firstChoice}
              choice={choice}
              onClick={() => handleChoiceClick(choice)}
            />
          ))}
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default ContentsPage;
