function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  return (endDate - beginDate) / (1000 * 60 * 60 * 24);
}

// find all images without alternate text
// and give them a red border
function process() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    if (!image.alt) {
      image.style.border = '2px solid red';
    }
  });
}

// 调用该方法可以在控制台打印出当前的时间
function logTime() {
  console.log(new Date());
}