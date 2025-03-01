import { FaCircleMinus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";

export function Account({ account, showForm, setShowForm }) {
  return (
    <li
      className={`flex items-center gap-2 mb-6 py-1 ${
        account?.level === 1
          ? " px-3"
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
          ? "bg-blue-400 "
          : account.level === 2
          ? "bg-blue-300"
          : account.level === 3
          ? "bg-blue-200"
          : account.level === 4
          ? "bg-blue-100"
          : ""
      }
         `}
    >
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

      <button>
        <HiOutlineDotsVertical className="text-2xl " />
      </button>
    </li>
  );
}
