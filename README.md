# AI 어드벤처

## Chat gpt api 를 활용하여 만든 선택지 자동 생성 웹 게임

## 일정

1일차 레이아웃 구성
2일차 레이아웃 완성
3일차 프론트 완성 및 백앤드 완성
4일차 레이아웃 수정
5일차 코드리뷰 및 리펙토링
6일차 배포 테스트
7일차 수정 및 최종 배포

## 사용한 라이브러리 및 API

axios
styled-component
openai api
express

## 문제발생

== 최적화 및 UX ==

처음 사용하는 배경이미지로 배경이 바뀔때 이미지로드가 발생해서
이미지가 로드 되지 않은 부분은 흰화면이 발생함
원인은 버튼눌러서 배경이미지를 해당이미지로 바꿀떄 이미 로드된 이미지를 사용하지않고
다시 이미지를 불러와서 사용중임 미리 로드하는 방법으로 해결이 가능해 보임

해결방법1: index.html에 preload를 추가해서 미리 로드해서 해결
=> 바로 사용하지 않을 이미지를 프리로드하면 경고가 발생함 사용하지 않을수도 있는 이미지 까지 로드하므로 리소스 낭비가 발생하기 때문이다
해결방법2: 이미지 로드중에는 배경화면을 날리고 로드가 끝날때 나오게 하는 방법
=> 사용하지 않을 이미지를 로드하는 낭비를 줄일 수 있다

서버에서 데이터를 받아오는 시간동안 화면에 로딩스크린을 띄우고 입력을 막아야함
=>통신에 finally에 로딩상태를 추가해 로딩스크린을 띄움
=> 새로운 문제발생!!! 배경이미지 프리로딩때 사용하는 로딩과 통신에 사용되는 로딩이
동시에 발생하는 첫 장소 선택지 선택 후 로딩이 겹쳐지는 문제가 발생함
=> 프리 로딩이 먼저 로딩이 끝나기 때문에 그걸 이용해서 해결가능해보임
=> 하나의 로딩 스크린을 사용하고 두개의 프리로딩과 통신 로딩 상태가 모두 false가 되었을때만 로딩 스크린을 내리는 방식을 쓰면 될 듯

가끔 gpt가 답을 못 내놓는 버그가 발생했을때 처음으로 복귀시키고 안내하는 화면이 필요함

== 보안 ==

api_key가 포함된 통신을 프론트에서 하면 환경변수를 사용해도 유출될 위험이 크다.
=> backend 서버를 구성해서 프론트에서는 데이터만 받아서 써야함
