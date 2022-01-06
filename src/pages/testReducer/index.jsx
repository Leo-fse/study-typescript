import { useCallback, useEffect, useReducer } from "react";

const API_URL = "http://jsonplaceholder.typicode.com/posts";
const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: {
      throw new Error("no such action type!!");
    }
  }
};

const testReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPost = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("エラーが発生してデータの取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);
  console.log(state.data);
  return (
    <ul>
      {state.data.map((item) => {
        console.log(item.id, item.body);
        <li key={item.id}>
          {item.id} {item.body}
        </li>;
      })}
    </ul>
  );
};
export default testReducer;
