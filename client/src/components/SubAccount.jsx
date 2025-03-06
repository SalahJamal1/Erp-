import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Account from "./Account";
function SubAccount({ account }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <li
        className={`flex items-center gap-2 ${
          account.level === 2 && account.level > 1
            ? "ml-6"
            : account.level === 3
            ? "ml-10"
            : ""
        }`}
      >
        <button onClick={() => setShowForm((s) => !s)}>
          {showForm ? (
            <FaCircleMinus className="text-xl text-blue-800" />
          ) : (
            <IoIosAddCircle className="text-xl text-blue-800" />
          )}
        </button>

        <h2 className="font-semibold text-xl text-blue-800 flex items-center gap-2">
          {account?.level > 1 && <span>{account?.accountNumber}</span>}
          <span className="border-b-2">{account?.accountName}</span>
        </h2>

        <button>
          <HiOutlineDotsVertical className="text-2xl text-blue-800" />
        </button>
      </li>
      {showForm && (
        <ul>
          {account.subAccounts.map((account) => (
            <Account account={account} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubAccount;
