# 와이어프레임
1. 회원가입
   - 닉네임 : 3자이상, 대소문자, 숫자
   - 비밀번호 : 4자이상, 닉네임과 같은 값 x
   - 비밀번호 확인 : 비밀번호화 일치
   - db데이터 조회 후 닉네임값이 존재하면 '중복된 닉네임입니다.
   - 회원가입 이후 로그인 페이지로 이동
   - 로그인 상태 -> 전체 게시글 목록 조회 페이지
2. 로그인
   - 닉네임, 비밀번호 입력 후 **두개 중 하나라도 맞지 않을 때** "닉네임 또는 패스워드를 확인해주세요"라는 메세지
   - 로그인 이후 전체 게시글 목록 조회 페이지
   - 로그인 상태 -> 전체 게시글 목록 조회 페이지
3. 게시글 목록 조회 페이지
   - 로그인 미필요
4. 게시글 조회 페이지
   - 로그인 미필요
   - 댓글 목록 조회
   - 유튜브 댓글처럼 만들기
5. 게시글 추가 페이지
   - 로그인 필요
   - 비 로그인 상태 -> "로그인이 필요합니다." 라는 메세지를 프론트엔드에서 띄워주고 로그인 페이지로 이동
6. 게시글 삭제 및 수정 페이지
   - 로그인 필요
   - 비 로그인 상태 -> "로그인이 필요합니다." 라는 메세지를 프론트엔드에서 띄워주고 로그인 페이지로 이동
7. 댓글 목록 조회 페이지
   - 로그인 미필요

우선 마무리 하고 하자
   