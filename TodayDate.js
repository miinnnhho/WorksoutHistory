// 날짜
    let today = new Date();
  
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
  
    document.write(+year + '년 ' + month + '월 ' + date + '일');
  