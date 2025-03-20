// 브라우저 스타일드 컴포넌트가 dom에 전달되지 않는 오류 발생
// styled-components는 props에 $를 붙여서 전달된 props를 DOM에 전달하지 않도록 할 수 있다. 이를 transient props라고 함.
import { useState } from 'react';
import { PageProps } from '../App';
import ContentsButton from '../components/ContentsButton';
import { TypeKey } from '../constants';
import { TextContainer, ButtonContainer } from '../styles/Container';
import { fetchStroy } from '../function/fetchStory';
import CommuLoadingPage from './CommuLoadingPage';
import { ContentsContainer } from '../styles/ContentsContainer';
import { HomeButton } from '../styles/HomeButton';

interface IResponse {
  text: string;
  choices: string[];
}

function ContentsPage({ handleOnClick, handleBgImage, isBgLoading }: PageProps) {
  // 페이지 컴포넌트가 바뀌어서 컴포넌트가 리렌더링 될때마다 바뀜
  const imgNumber = Math.floor(Math.random() * 2 + 1);
  const initialChoices = ['숲', '무인도', '사막', '설원'];
  const initialText = '모험을 떠날 장소를 선택하세요';
  //상태
  const [text, setText] = useState(initialText);
  const [choices, setChoices] = useState(initialChoices);
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  const [firstChoice, setFirstChoice] = useState<TypeKey | null>(null);
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastStage, setIsLastStage] = useState(false);

  // 결말 스테이지 포함한 스테이지의 갯수
  const mayStage = 7;
  // ai가 출력할 선택지 갯수
  const numberOfSelection = 4;

  // 첫 번째 선택지를 클릭했을 때 선택된 색상을 저장
  const handleChoiceClick = async (choice: string) => {
    // 상태를 바로 통신에 사용하면 비동기적으로 실행되기 때문에 상태 업데이트 전에 이전 값이 넘어가서 변수를 따로 설정해서 쓸 것
    const updatedChoices = [...selectedChoices, choice];
    const isLastStage = stage === mayStage - 1;

    updateStateBeforeFetch(choice, updatedChoices, isLastStage);

    // 마지막 스테이지가 아닐 경우, 스테이지를 증가시킴
    const response = await fetchStroy(
      choice,
      isLastStage,
      updatedChoices,
      numberOfSelection,
      setIsLoading
    );

    updateStateAfterFetch(response);
  };

  // 통신전에 업데이트 해야하는 상태를 다루는 함수
  const updateStateBeforeFetch = (
    choice: string,
    updatedChoices: string[],
    isLastStage: boolean
  ) => {
    setSelectedChoices(updatedChoices);
    setIsLastStage(isLastStage);

    if (stage === 1) {
      handleFirstStageChoice(choice);
    }
  };

  const handleFirstStageChoice = (choice: string) => {
    const btnTheme = `${choice}${imgNumber}`;
    setFirstChoice(btnTheme as TypeKey);
    handleBgImage?.(choice, imgNumber);
  };

  // 통신 후에 업데이트 해야하는 상태를 다루는 함수
  const updateStateAfterFetch = (response: IResponse) => {
    setText(response.text);
    // choices가 undefined일때 빈배열 할당함(마지막 통신의 경우)
    setChoices(response.choices ?? []);
    setStage((prev) => prev + 1);
  };

  return (
    <>
      {isLoading || isBgLoading ? (
        <CommuLoadingPage />
      ) : (
        <ContentsContainer>
          <HomeButton onClick={() => handleOnClick('Main')}>
            <i className='bi bi-house'>홈으로</i>
          </HomeButton>
          {/* <h1>{`현재 스테이지: ${stage}`}</h1>  디버그용*/}
          <TextContainer $firstChoice={firstChoice}>{text}</TextContainer>
          <ButtonContainer>
            {isLastStage
              ? ''
              : choices.map((choice, index) => (
                  <ContentsButton
                    key={index}
                    firstChoice={firstChoice}
                    choice={choice}
                    onClick={() => handleChoiceClick(choice)}
                    imgNumber={imgNumber}
                  />
                ))}
          </ButtonContainer>
        </ContentsContainer>
      )}
    </>
  );
}

export default ContentsPage;
