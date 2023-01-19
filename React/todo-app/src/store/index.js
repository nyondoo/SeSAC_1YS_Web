// Redux 통합관리는 여기서
import { combineReducers } from 'redux'; //모듈 임포트
import todo from './modules/todo';
import mbti from './modules/mbti';

export default combineReducers({
  todo,
  mbti,
});
