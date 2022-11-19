
function login(id, pw, cb) {
    setTimeout(function(){
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}
function getVideo(id, cb) {
    setTimeout(function(){
        console.log( id + "의 비디오 리스트");
        cb( ['아바타', '라라랜드']);
    }, 2000);
}
function getDetail(video, cb) {
    setTimeout(function() {
        cb("비디오 제목 : " + video);
    }, 1000);
}

login('kim', '1234', function(user){// cb(id) = function(user){}, user = id
    // 사용자 입장 출력
    getVideo(user, function(videos) {// cb(['아바타', '라라랜드']) = function(vedios){}, vedios = ['아바타', '라라랜드']
        // 'user의 비디오 리스트' 를 출력
        getDetail(videos[0], function(msg){// cb("비디오 제목 : " + video) = function(msg){}, msg = "비디오 제목 : " + video
            console.log( msg );// "비디오 제목 : " + video 를 출력, vedio = vedios[0]
        });
    });

    // getVideo(user, function(videos){
    //     getDetail(videos[0], function(msg){
    //         console.log( msg );
    //     });
    // });
});
// function login(id, pw, cb) {
//     console.log("사용자 입장");
//     return id;
// }
// function getVideo(id, cb) {
//     console.log( id + "의 비디오 리스트");
//     return ['아바타', '라라랜드'];
// }
// function getDetail(video, cb) {
//     return "비디오 제목 : " + video;
// }
// let user = login('kim', '1234');
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);
