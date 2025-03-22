import express from 'express';
import dotenv from 'dotenv';
import { endingPromptCaller, normalPromptCaller } from '../functions';
import callOpenAI from '../functions/callOpenAI';
import cors from 'cors';

dotenv.config();

const app = express();
// RailWay에서 제공해주는 public domain 없으면 로컬환경 5000번 포트에서
const port = process.env.PORT || 5000;
const baseUrl = process.env.PORT
  ? `https://ai-advanture-production.up.railway.app`
  : `http://localhost:${port}`;
let prompt: string;

app.use(cors());
// JSON 형식의 요청 본문을 파싱(parsing) 하기 위한 미들웨어
app.use(express.json());

app.post('/generate-story', async (req, res) => {
  const { choice, isLast, selectedChoices, numberOfSelection } = req.body;
  console.log(choice, isLast);
  console.log('지금까지의 선택지:', selectedChoices);
  console.log('선택지갯수:', numberOfSelection);
  try {
    if (isLast) {
      prompt = endingPromptCaller(selectedChoices);
      console.log('엔딩 프롬프트 사용');
    } else {
      prompt = normalPromptCaller(selectedChoices, numberOfSelection);
    }

    const response = await callOpenAI(prompt);

    // ai가 답변과 선택지를 만들지 못했을 경우 처리
    if (response === undefined) {
      return res.status(500).send({ message: 'AI 서비스에서 유효한 응답을 받지 못했습니다.' });
    }
    // 요청 처리 로직
    res.send({ message: '성공적으로 처리되었습니다.', story: response });
  } catch (error) {
    console.error('서버 오류 발생:', error);
    // 오류 발생 시 클라이언트에게 오류 메시지 전송
    res.status(500).send({ message: '서버에서 오류가 발생했습니다. 다시 시도해 주세요.' });
  }
});

app.listen(port, () => {
  console.log(`서버가 ${baseUrl}에서 실행 중`);
});
