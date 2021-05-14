// 함수에 함수에 함수를 리턴해서~♪
const myLogger = store => next => action => {
  console.log(action);
  console.log('\tPrev: ', store.getState());
  const result = next(action);
  console.log('\tNext: ', store.getState());
  return result;
}

export default myLogger;