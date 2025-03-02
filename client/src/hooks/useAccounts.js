import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getChartAccount, setError, setLoading } from "../store/accountSlice";
import { getAccounts } from "../services/apiErp";

function useAccounts() {
  const dispatch = useDispatch();
  const fetchAccounts = useCallback(
    async function fetchAccounts() {
      dispatch(setLoading());
      try {
        const res = await getAccounts();
        dispatch(getChartAccount(res));
      } catch (err) {
        console.log(err);
        dispatch(setError(err.message));
      }
    },
    [dispatch]
  );
  return { fetchAccounts };
}

export default useAccounts;
