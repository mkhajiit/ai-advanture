import axios from 'axios';

const port = import.meta.env.VITE_ENDPOINT_URL || 5000;
const baseUrl = port === 5000 ? `http://localhost:${port}` : `https://${port}`;

export async function fetchStroy(
  choice: string,
  isLast: boolean,
  selectedChoices: string[],
  numberOfSelection: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorOccurred: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setIsLoading(true);
    const { data } = await axios.post(`${baseUrl}/generate-story`, {
      choice,
      isLast,
      selectedChoices,
      numberOfSelection,
    });
    // console.log(data.story); // 방금 그 객체 나옴
    return data.story;
  } catch (error) {
    console.log('오류 메시지:', error);
    setErrorOccurred(true);
  } finally {
    setIsLoading(false);
  }
}
