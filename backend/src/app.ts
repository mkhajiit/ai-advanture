import express from 'express';
import dotenv from 'dotenv';
import { endingPromptCaller, normalPromptCaller } from '../functions';
import callOpenAI from '../functions/callOpenAI';
import cors from 'cors';

dotenv.config();

const app = express();
// RailWay에서 제공해주는 public domain 없으면 로컬환경 5000번 포트에서
const port = process.env.RAILWAY_PUBLIC_DOMAIN || 5000;
const baseUrl =
  port === 5000 ? `http://localhost:${port}` : `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`;
let prompt: string;

const corsOptions = {
  origin: [
    'http://localhost:5173', // 프론트 로컬 환경에서 요청을 허용
    'https://ai-advanture-416oq1rrm-mkhajiits-projects.vercel.app', // Vercel 배포 도메인 허용
  ],
  methods: ['GET', 'POST'], // 허용할 HTTP 메서드
  allowedHeaders: ['Content-Type'], // 허용할 헤더
  credentials: true, // 클라이언트에서 쿠키를 보내려면 이 옵션을 추가
};

app.use(cors(corsOptions));
// JSON 형식의 요청 본문을 파싱(parsing) 하기 위한 미들웨어
app.use(express.json());

// OPTIONS 요청을 처리하는 미들웨어 (CORS 헤더 설정)
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 또는 특정 도메인
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(204); // No Content 응답
});

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
  res.setHeader('Access-Control-Allow-Origin', '*'); // 여기서 모든 도메인 허용
  res.send({ message: '성공적으로 처리되었습니다.', story: response });
});

app.listen(port, () => {
  console.log(`서버가 ${baseUrl}에서 실행 중`);
});
