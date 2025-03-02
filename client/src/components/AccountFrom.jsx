import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAccounts from "../hooks/useAccounts";
import { createAccount, updateAccount } from "../services/apiErp";
import { setOption } from "../store/accountSlice";
import { useNavigate, useParams } from "react-router-dom";

function AccountFrom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchAccounts } = useAccounts();
  const { accounts, options } = useSelector((store) => store.chartAccount);
  const { id } = useParams();
  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);
  const account = accounts.find((acc) => acc.id === +id);
  const [formData, setFormData] = useState({
    accountName: account?.accountName || "",
    accountNumber: account?.accountNumber || "",
    openingBalance: account?.openingBalance || "",
    level: account?.level || "",
    accountId: account?.accountId || "",
  });

  useEffect(() => {
    if (id) {
      setFormData({
        accountName: account?.accountName || "",
        accountNumber: account?.accountNumber || "",
        openingBalance: account?.openingBalance || "",
        level: account?.level || "",
        accountId: account?.accountId || "",
      });
    }
  }, [id, account]);

  async function onSubmit(e) {
    e.preventDefault();

    const res = id
      ? await updateAccount(id, formData)
      : await createAccount(formData);

    if (res.status === 200) {
      fetchAccounts();
      dispatch(setOption(null));
      navigate(-1);
    }
  }

  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      level:
        name === "accountNumber"
          ? value.length <= 4
            ? value.length
            : 5
          : formData.level,
    });
  }
  useEffect(() => {
    if (options) {
      setFormData((prev) => ({ ...prev, accountId: options.id }));
    }
  }, [options]);

  return (
    <div className=" text-white flex items-center justify-center">
      <form
        method="POST"
        onSubmit={onSubmit}
        className="flex items-center justify-center flex-col w-fit bg-[#034fb1] px-8 py-12"
      >
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
              placeholder="Account Number"
              onChange={handelChange}
              required
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
              placeholder="Account Name"
              value={formData.accountName}
              onChange={handelChange}
              required
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              Opening Balance
            </label>
            <input
              type="text"
              className="border-2 rounded-full py-2 text-center w-[25rem]"
              value={formData.openingBalance}
              onChange={handelChange}
              name="openingBalance"
              placeholder="Opening Balance"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              under ledger
            </label>
            <select
              value={formData.accountId}
              onChange={handelChange}
              name="accountId"
              className="border-2  px-4 py-2 text-center rounded-full w-[25rem]"
              required
            >
              <option value="">
                {options ? options.accountName : "Select account"}
              </option>
              {accounts?.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.accountName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="border-2 rounded-full py-6 px-4 cursor-pointer">
          {id ? "update" : "Add"} Account
        </button>
      </form>
    </div>
  );
}

export default AccountFrom;
