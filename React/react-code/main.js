// @ts-check

function foo(a, b, ...rest) {
  //   rest = { c: '', d: 'd' };
  //매개변수가 많을 때 ...rest로 불러올 경우 rest에는 객체형태로 담겨옴
}

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(...arr);

// // const copyArr = arr; // 배열의 값이 아닌 배열의 메모리 주소값이 담김
// // console.log(copyArr);
// // console.log(arr === copyArr);

// const copyArr = [...arr];
// console.log(copyArr);
// console.log(arr === copyArr);

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

console.log(obj); //{ pororo: '뽀로로', lupy: '루피', crong: '크롱' }
console.log({ ...obj }); //{ pororo: '뽀로로', lupy: '루피', crong: '크롱' } 객체 obj와 같은 값을 갖는 새로운 메모리 주소 생성

const copyObj = { ...obj, lupy: 'lupy' };
// 값만을 가져온 후 원하는 키의 값만 변경하기
console.log(obj);
console.log(copyObj); //{ pororo: '뽀로로', lupy: 'lupy', crong: '크롱' }
console.log(obj === copyObj);
