// Redux 통합관리는 여기서
import { combineReducers } from 'redux'; //모듈 임포트
import mbti from './modules/mbti';
import todo from './modules/todo'; // store todo 임포트

export default combineReducers({
  // 인자로 객체를 전달, 객체에는 각각의 모듈들을 합쳐서 전달
  todo,
  mbti,
}); // 여기서 todo는 함수 todo로 선언한 리듀서

//이 통합 스토어는 최상위 src/index.js 에서 Provider에 store 속성으로 주어짐.
//컴포넌트에서 스토어를 사용할 때는 이 스토어로 접근해 각 스토어로 접근하는 방식으로 사용
