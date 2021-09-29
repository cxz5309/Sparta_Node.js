console.log("유틸함수를 불러왔음");

export const nowDateToString = () => {
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();

  //return `${year}년 ${month}월 ${day}일`;
  let date = new Date();

  return date.toLocaleDateString('ko-KR', { timeZone: 'UTC' });
};
 

const movePage = (url) =>{
  location.href=url;
}