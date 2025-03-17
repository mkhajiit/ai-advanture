import axios from 'axios';

const port = import.meta.env.VITE_ENDPOINT_URL || 5000;
const baseUrl = port === 5000 ? `http://localhost:${port}` : `https://${port}`;

export async function fetchStroy(
  choice: string,
  isLast: boolean,
  selectedChoices: string[],
  numberOfSelection: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setIsLoading(true);
    const { data } = await axios.post(
      `${baseUrl}/generate-story`,
      {
        choice,
        isLast,
        selectedChoices,
        numberOfSelection,
      },
      {
        withCredentials: true, // 이 옵션을 추가해서 CORS 요청에 credentials을 포함시킴
      }
    );
    console.log(data.story); // 방금 그 객체 나옴
    console.log(data.story.text); // undefined 나옴
    return data.story;
  } catch (error) {
    console.log('오류 메시지:', error);
  } finally {
    setIsLoading(false);
  }
}
