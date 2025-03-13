# AI 어드벤처

## Chat gpt api 를 활용하여 만든 선택지 자동 생성 웹 게임

## 일정

1일차 레이아웃 구성
2일차 레이아웃 완성 및 백앤드 완성
3일차 프론트 완성 및 배포
4일차 리펙토링 후 재배포

## 사용한 라이브러리 및 API

styled-component

## 문제발생

처음 사용하는 배경이미지로 배경이 바뀔때 이미지로드가 발생해서
이미지가 로드 되지 않은 부분은 흰화면이 발생함
원인 버튼눌러서 배경이미지를 해당이미지로 바꿀떄 이미 로드된 이미지를 사용하지않고
다시 이미지를 불러와서 사용중임 미리 로드하는 방법으로 해결이 가능해 보임

해결방법1: index.html에 preload를 추가해서 미리 로드해서 해결
