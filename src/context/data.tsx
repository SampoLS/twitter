import {
  createContext,
  useEffect,
  useReducer,
  useState,
  useContext,
} from "react";
import reducerAddCount from "./reducerAddCount";

interface Children {
  children: JSX.Element;
}
interface DefaultValue {
  users: Array<{ id: number; avatar_url: string; login: string }>;
  count: { count: number };
  dispatch: React.Dispatch<any>;
}

export const UserContext = createContext<DefaultValue>({
  users: [],
  count: { count: 0 },
  dispatch: () => null,
});

export const useUserContext = () => {
  return useContext(UserContext);
};

let state = {
  count: 0,
};

const UserProvider = ({ children }: Children) => {
  const [users, setUsers] = useState([]);
  const [count, dispatch] = useReducer(reducerAddCount, state);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.data;
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, count, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
