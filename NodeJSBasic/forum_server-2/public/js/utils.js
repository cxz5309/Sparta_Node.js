console.log("유틸함수를 불러왔음");

const dateToString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
 

const movePage = (url) =>{
  location.href=url;
}