export function endingPromptCaller(userChoices: string[], numberOfSelection: number) {
  const ENDING_PROMPT = `
  당신은 텍스트 어드벤처 게임을 진행하는 AI입니다.
  사용자의 선택을 기반으로 이야기를 진행하고, JSON 형식으로만 응답하세요.
  
  사용자가 지금까지 선택한 선택지: ${userChoices.join(' -> ')}
  당신이 만들어야 할 선택지는 ${numberOfSelection}개 입니다. 
  
  이 선택들을 바탕으로 결말을 작성해주세요. 이 이야기는 지금까지 사용자가 선택한 내용에 따라 완전한 결말을 맺어야 합니다. 
  추후 선택지가 없는 이야기를 마무리 지을 수 있는 결말을 이야기 해주세요
  결말을 작성할 때는 선택지 없이 텍스트만 반환해주세요.
  
  응답 예시:
  {
    "text": "다음 이야기가 시작됩니다."
  }
  
  최종적으로 JSON 형식으로만 응답해주세요.
  
  `;

  return ENDING_PROMPT;
}
