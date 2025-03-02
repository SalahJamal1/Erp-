import { useState } from "react";

function AccountFrom() {
  const [select, setSelect] = useState(null);

  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    openingBalance: "",
    level: "",
    accountId: select,
  });
  function handelChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className=" text-white flex items-center justify-center">
      <form className="flex items-center justify-center flex-col w-fit bg-blue-700 px-8 py-12">
        <div className="grid grid-cols-2  gap-12 mb-8">
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              Account Number
            </label>
            <input
              className="border-2 rounded-full py-2 text-white text-center w-[25rem]"
              type="text"
              value={formData.accountNumber}
              name="accountNumber"
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              Account Name
            </label>
            <input
              type="text"
              className="border-2 rounded-full py-2 text-center w-[25rem]"
              name="accountName"
              value={formData.accountName}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              Opening Balance
            </label>
            <input
              type="text"
              className="border-2 rounded-full py-2 text-center w-[25rem]"
              value={formData.openingBalance ? formData.openingBalance : 0}
              onChange={handelChange}
              name="openingBalance"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              under ledger
            </label>
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="border-2  px-4 py-2 text-center rounded-full w-[25rem]"
            >
              <option value={null}>select account</option>
              {accounts?.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.accountName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="border-2 rounded-full py-6 px-4 cursor-pointer">
          Add Account
        </button>
      </form>
    </div>
  );
}

export default AccountFrom;
