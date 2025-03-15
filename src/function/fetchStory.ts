import axios from 'axios';

export async function fetchStroy(
  choice: string,
  isLast: boolean,
  selectedChoices: string[],
  numberOfSelection: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setIsLoading(true);
    const { data } = await axios.post('http://localhost:5000/generate-story', {
      choice,
      isLast,
      selectedChoices,
      numberOfSelection,
    });
    console.log(data.story); // 방금 그 객체 나옴
    console.log(data.story.text); // undefined 나옴
    return data.story;
  } catch (error) {
    console.log('오류 메시지:', error);
  } finally {
    setIsLoading(false);
  }
}
