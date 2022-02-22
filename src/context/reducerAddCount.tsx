interface Action {
  type: string;
}
interface State {
  count: number;
}

const reducerAddCount = (state: State, action: Action): State => {
  switch (action.type) {
    case "HOME_INFO": {
      return { count: state.count + 1 };
    }
    default:
      return state;
  }
};
export default reducerAddCount;
