import { createRoot } from "react-dom/client";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// REDUCER - он меняет STORE
const initialState = {
  name: "Jack",
};

// принимает два аргумента: состояние и action
// action - это функция, в которую мы будем передавать значения для состояния
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// ACTION
const setName = (obj) => ({
  type: "ADD_NAME",
  payload: obj,
});

// const setAge = (name) => ({
//   type: "ADD_AGE",
//   payload: name,
// });

// STORE - глобальный объект, с которым ведется работа
const store = createStore(reducer);

// VIEW - представление
const App = () => {
  const dispatch = useDispatch();

  const changeName = () => {
    dispatch(
      setName({
        name: "Luke",
      })
    );
    // setName("Luke");
  };
  return <button onClick={changeName}>Change Name</button>;
};

const ViewName = () => {
  // useSelector - функция, которая принимает в себя state, который у нас есть, и возвращает какое-то конкретное значение
  const storeName = useSelector((state) => state.name);

  return <h1>{storeName}</h1>;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// CONNECT
root.render(
  <Provider store={store}>
    <App />
    <ViewName />
  </Provider>
);
