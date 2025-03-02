import { FaCircleMinus } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Options from "./Options";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../store/accountSlice";
import { useEffect, useState } from "react";
export function Account({ account, showForm, setShowForm }) {
  const { options } = useSelector((store) => store.chartAccount);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (options != null) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [options, show]);

  return (
    <li
      className={`flex items-center gap-2 mb-6 py-1 justify-between relative ${
        account.level < 5 && "text-white"
      } ${
        account?.level === 1
          ? "px-3"
          : account?.level === 2
          ? "pl-8"
          : account?.level === 3
          ? "pl-12"
          : account?.level > 4
          ? "pl-28"
          : "pl-20"
      }
      ${
        account.level === 1
          ? "bg-[#034fb1]"
          : account.level === 2
          ? "bg-[#034fb1]/90"
          : account.level === 3
          ? "bg-[#034fb1]/80"
          : account.level === 4
          ? "bg-[#034fb1]/70"
          : ""
      }
         `}
    >
      <div className="flex items-center gap-2">
        {account?.subAccounts?.length > 0 && (
          <button onClick={() => setShowForm((s) => !s)}>
            {showForm ? (
              <FaCircleMinus className="text-xl" />
            ) : (
              <IoIosAddCircle className="text-xl" />
            )}
          </button>
        )}
        <h2 className="font-semibold text-xl flex items-center gap-2">
          {account?.level > 1 && <span>{account?.accountNumber}</span>}
          <span>{account?.accountName}</span>
        </h2>
      </div>

      <button
        onClick={() => {
          dispatch(setOption(account));
          setShow(true);
        }}
        className="absolute top-2 right-[2%]"
      >
        <BsThreeDots className="text-2xl " />
      </button>
      {options?.id === account?.id && <Options show={show} />}
    </li>
  );
}
