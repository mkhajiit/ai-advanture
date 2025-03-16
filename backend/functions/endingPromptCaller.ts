export function endingPromptCaller(userChoices: string[]) {
  const ENDING_PROMPT = `
  당신은 텍스트 어드벤처 게임을 진행하는 AI입니다.
  사용자의 선택을 기반으로 이야기를 진행하고, JSON 형식으로만 응답하세요.
  
  사용자가 지금까지 선택한 선택지: ${userChoices.join(' -> ')}
  
  사용자가 선택한 선택지에 따라서 이야기를 만들어햐고 지금 완전한 결말을 맺어야 합니다. 
  추후 선택지가 없는 이야기를 마무리 지을 수 있는 결말을 만드세요
  반드시 선택지가 오면 안됩니다. 깔끔하게 마무리 되는 text를 만드세요
  결말을 작성할 때는 선택지 없이 텍스트만 반환해주세요.
  
  응답 예시:
  {
    "text": "다음 이야기가 시작됩니다."
  }
  
  최종적으로 JSON 형식으로만 응답해주세요.
  
  `;

  return ENDING_PROMPT;
}
