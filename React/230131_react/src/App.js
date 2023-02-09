import Contact from './Contact';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  const list = useSelector((state) => state);
  function reducer(state = [], action) {
    if (action.type === 'ADD') {
      return [...state, action.payload];
    }
    return state;
  }
  const store = createStore(reducer);
  return (
    <>
      <Provider store={store}>
        현재 개수 : {list.length}
        <br />
        <Contact />
      </Provider>
    </>
  );
}

//1. import Provider
//<Provider>은 꼭 최상위에 있지 않더라도 redux store를 사용하고자하는 컴포넌트를 감싸고 있으면 된다
//2. createStore import
//Provider에 store 전달
//store에 reducer
