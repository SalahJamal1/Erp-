import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOption } from "../store/accountSlice";

function useOption() {
  const dispatch = useDispatch();
  useEffect(() => {
    const exit = (e) => {
      if (e.code === "Escape") dispatch(setOption(null));
    };

    document.querySelector("body").addEventListener("keydown", exit);
    return () =>
      document.querySelector("body").removeEventListener("keydown", exit);
  }, [dispatch]);
}

export default useOption;
