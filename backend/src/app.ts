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
  if (isLast) {
    prompt = endingPromptCaller(selectedChoices);
    console.log('엔딩 프롬프트 사용');
  } else {
    prompt = normalPromptCaller(selectedChoices, numberOfSelection);
  }
  const response = await callOpenAI(prompt);
  // 요청 처리 로직
  res.send({ message: '성공적으로 처리되었습니다.', story: response });
});

app.listen(port, () => {
  console.log(`서버가 ${baseUrl}에서 실행 중`);
});
