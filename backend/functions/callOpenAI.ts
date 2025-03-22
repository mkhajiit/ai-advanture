import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function callOpenAI(prompt: string): Promise<string | undefined> {
  // 오류발생시 재통신 횟수 설정
  const retries = 3;
  let attempt = 0; // 시도 횟수 초기화

  while (attempt < retries) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // 최신 모델
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const content = response.data.choices[0].message.content.trim();
      // Axios가 JSON을 파싱하는 것은 첫 번째 수준의 JSON 객체만 처리하고,
      // 만약 안에 문자열 형태의 JSON 객체가 포함되면 이를 문자열로 보고 처리하지 않습니다.
      const parsedContent = JSON.parse(content);
      console.log(parsedContent);
      return parsedContent;
    } catch (error) {
      attempt++; // 실패 시 시도 횟수 증가
      console.log(`오픈api 통신오류 로그: ${error}`);
      if (attempt === retries) {
        // 마지막 시도에서 실패한 경우 return
        return undefined; // 최대 시도 횟수 도달 시 undefined 반환
      }
      throw error;
    }
  }
}

export default callOpenAI;
