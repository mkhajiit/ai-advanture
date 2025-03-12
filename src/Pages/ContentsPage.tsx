import { useState } from 'react';
import { PageProps } from '../App';
import ContentsButton from '../components/ContentsButton';
import { TypeKey } from '../constants/MyStyles';

function ContentsPage({ handleOnClick }: PageProps) {
  const initialChoices = ['숲', '무인도', '사막', '설원'];
  const initialText = '모험을 떠날 장소를 선택해주세요';
  const [text, setText] = useState(initialText);
  const [choices, setChoices] = useState(initialChoices);
  const [firstChoice, setFirstChoice] = useState<TypeKey | null>(null);

  // 첫 번째 선택지를 클릭했을 때 선택된 색상을 저장
  const handleChoiceClick = (choice: string) => {
    setFirstChoice(choice as TypeKey);
  };

  return (
    <div>
      <button onClick={() => handleOnClick('Main')}>초기 화면으로</button>
      <h1>콘텐츠 페이지</h1>
      <h2>{text}</h2>
      {choices.map((choice, index) => (
        <ContentsButton
          key={index}
          firstChoice={firstChoice}
          choice={choice}
          onClick={() => handleChoiceClick(choice)}
        />
      ))}
    </div>
  );
}

export default ContentsPage;
