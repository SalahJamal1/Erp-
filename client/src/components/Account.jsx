import { FaCircleMinus } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Options from "./Options";
export function Account({
  account,
  showForm,
  setShowForm,
  handelOption,
  options,
  setOptions,
}) {
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
        onClick={() => handelOption(account)}
        className="absolute top-2 right-[2%]"
      >
        {/* <HiOutlineDotsVertical className="text-2xl " /> */}
        <BsThreeDots className="text-2xl " />
      </button>
      {options?.id === account?.id && (
        <Options setOptions={setOptions} options={options} />
      )}
    </li>
  );
}
