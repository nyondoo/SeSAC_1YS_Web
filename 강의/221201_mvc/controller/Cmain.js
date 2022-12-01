const Test = require('../model/Test')

exports.main = (req, res) => {
    let hi = Test.hello(); // model/Test.js에서 정의한 함수 hello의 리턴값을 변수 hi에 담음
    res.send(hi);
    //res.render('index');
}; // 본래 상위 index.js 파일 내 app.get 에서 하던 것을 여기다 정의

exports.test = (req, res) => {
    res.send('hello');
};

exports.post = (req, res) => {
    res.send('post');
};

// routes/index.js에서 정의한 라우터들 : //
// router.get('/', controller.main);
// router.get('/test', controller.test);
// router.post('/postForm', controller.post);

// module.exports = {
//     main: this.main,
//     test: this.test,
//     post: this.post
// }