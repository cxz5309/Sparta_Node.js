# CRUD 로그인 기능이 없는 나만의 항해 블로그 만들기

### 다시는 이러지 말자는 생각으로 쓰는 회고록   

내가 생각해도 쓸데없는짓을 너무 많이 했다.  
간단한 crud구현이기 때문에 첫날에 pug를 이용하여 간단하게 만든 백엔드가 거의 마무리되었다.  
이틑날정도에 추가작업 (라우팅, 코드개선, dotenv, eslint 기타 등등) (설정만) 했다. 결국 제대로 이용도 못했다.  
심지어 꼭 했어야했던 바벨은 옛날에 고생한 기억이 있어서 안해놓고 미루다가 결국 제대로 카운터맞았다   
그렇게 대충 계산으로 프론트 마무리하고, 프론트 기반으로 백엔드 기능 이것저것 더 넣어야겠다~ 하고 아직 시간 많으니 프론트에 좀 더 투자해도 되겠다! 라는 멍청한 생각을 하고 말았다.  
게다가 html에 script를 넣어서 사용하는게 너무 불편해서 pug나 ejs말고 프론트엔드를 따로 만들까 생각했다.(이게 제일 문제였다)  
일단 리액트 잠깐 해봤으니까 리액트? -> 리액트는 너무 단일 페이지라 백엔드 미션에 적합하지 않은것 같네 -> next.js가 리액트의 SSR을 쉽게 구현할 수 있게 도와준다고 하네?
-> next.js 공부 돌입...  
-> 그러다 조금 어려워보임 + 프론트 서버도 만들어야 함 때문에 때려침  
-> 그런데도 불구하고 아직 정신못차리고 또 하루 더 nest.js 공부함.  
-> 결국 기본 css도 잘 못하는데 프레임워크만 익히는건 아니라고 판단해서 일단 html이랑 css부터 대충 마무리하고 돌아오기로 했다.  
-> 월요일 정신차리고 html, css마무리, 근데 프론트 제대로 안한게 너무 아쉬웠다;;  
-> 또 미쳐가지고 리액트는 시간상 안되보이니까 바닐라js로 단일페이지 렌더링이라도 구현하기로 했던게 바로 어제..  
결국 문제가 생겼다.  
백엔드 개발용으로 프론트를 만든건데 백엔드 개발을 하려면 프론트 서버를 따로 만들지 않으면 안되고 하더라도 백퍼센트 cors문제가 생길 것 같았다. app.use로 static폴더에 프론트용 node_modules 넣어두고 하면 될거라고 생각했는데 안됬다.  
-> 결국 다 때려치고 ejs로 바꾸는데 또 하루....(게다가 이 과정에서 주먹구구식으로 만든 css가 문제생겨서 더 박살났다.)   
또 마지막까지 괜히 es6문법썼다가 pm2가 안먹혀서 급하게 바벨깔고 바벨 오류내고 아주 별짓을 다했다.  
```
"scripts": {
  "server": "babel-node ./src/server.js"
},

pm2 start npm -- run server
```  
혹시 또 쓸까봐 적는 코드 
  
- 결국 완성된것  
crud : 되긴 하지만 오류설정 제대로 안함  
이미지 파일 업로드 : 이미지 파일 업로드까지는 성공했는데 파일 업데이트는 안된다.   
조회수 구현해놓고 표기 안함   
쿠키, 세션 : 모델 만들어놓고 쓰지도 못함  
popular, recent sort해놨는데 ejs에서 for문으로 읽을때 index가 sort된 순서가 아닌 것으로 보임. 버그  
css : 박살났다가 임시로 복구, 반응형 시도는 했으나 텍스트 크기 조절할줄 몰라서 실패  
dotenv, bcrypt 등 : 설정 다 해놓고 안씀  
  
  
결론 : 제발 배운거나 잘 써먹자  