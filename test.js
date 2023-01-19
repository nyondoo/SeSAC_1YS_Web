function a() {
  const obj = { a: 'one', b: 'two', c: 'three' };
  console.log(obj.a);
  console.log(obj['a']);
  obj.d = 'four';
  console.log(obj['d']);
  obj['e'] = 'five';
  console.log(obj.e);
}

a();
