import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "../Redux/auth/authOperations";
import { selectIsAuth, selectUser } from "../Redux/auth/authSelectors";

const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthCheck;
