import { IoIosAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
function Account({ account }) {
  const [showForm, setShowForm] = useState(true);
  return (
    <li
      className={`flex items-center gap-2 mb-6 ${
        account?.level === 1
          ? ""
          : account?.level === 2
          ? "ml-6"
          : account?.level === 3
          ? "ml-10"
          : account?.level > 4
          ? "ml-24"
          : "ml-16"
      }`}
    >
      {account?.subAccounts?.length > 0 && (
        <button onClick={() => setShowForm((s) => !s)}>
          {showForm ? (
            <FaCircleMinus className="text-xl text-blue-800" />
          ) : (
            <IoIosAddCircle className="text-xl text-blue-800" />
          )}
        </button>
      )}
      <h2 className="font-semibold text-xl text-blue-800 flex items-center gap-2">
        {account?.level > 1 && <span>{account?.accountNumber}</span>}
        <span className={`${account?.level === 1 && "border-b-2"}`}>
          {account?.accountName}
        </span>
      </h2>

      <button>
        <HiOutlineDotsVertical className="text-2xl text-blue-800" />
      </button>
    </li>
    
  );
}

export default Account;
