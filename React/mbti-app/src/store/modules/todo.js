////////////////////////////////'todo' Store////////////////////
//1. 초기 상태 state 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

let counts = initState.list.length;
initState.nextID = counts;
// = initState[nextID] = counts
//액션타입 정의하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

//액션 생성 함수 설정 - 액션타입을 외부에서 불러올 수 있도록 하는 함수
// 리듀서의 두번 째 인자 action으로 들어간다.
//컴포넌트에서 보내는 데이터를 payload라는 인자로 받음.
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

//액션 타입, 함수는 스토어 내부에서 정의된 것만 사용 가능

//어떤 일이 완료되었는지만 알면 되기 때문에 id값을 받아옴(key값 역할)
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

//리듀서
// export default -> todo.js를 임포트 하게 되면 사실상 리듀서가 나가는 것임.
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
// 1. 리듀서 잘 작동하는지 보기 위해 값 전달만. state로 위에서 선언한 변수 initState를 전달
