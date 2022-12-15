const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
​
//답변 버튼 구현
function addAnswer(answerText,qIdx){
    var a = document.querySelector('.aBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList'); //버튼 생성 후 해당 버튼에'answerList'클래스 추가
    a.appendChild(answer);//답변 박스에 버튼을 자식요소로 추가
    answer.innerHTML = answerText;//첫번째 인자 = 한 문제당 답변들을 버튼 텍스트로 주기
​
    answer.addEventListener("click",function(){//답변버튼이 클릭될 때 실행될 함수 지정
        var children = document.querySelectorAll('.answerList');//모든 버튼 중
        for(let i=0;i<children.length;i++){
            children[i].disabled = true;
            children[i].style.display='none';
        }//버튼을 안보이게 하기
        goNext(++qIdx);//다음 질문으로 넘어가기
    });
}
​
function goNext(qIdx){
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;//질문 하나당 해당 답변 버튼 만들기
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
}
​
function begin(){
    main.style.display="none";
    let qIdx = 0;
    goNext(qIdx);
}