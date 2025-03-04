import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAccounts from "../hooks/useAccounts";
import { createAccount, updateAccount } from "../services/apiErp";
import { setOption } from "../store/accountSlice";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
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
      setFormData((prev) => ({ ...prev, accountId: options?.id }));
    }
  }, [options]);

  const accountOptions = accounts
    .filter((el) => el.level < 5)
    .map((acc) => ({
      value: acc.id,
      label: `${acc.accountNumber} ${acc.accountName}`,
    }));

  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: "20px",
      border: "2px solid #034fb1",
      borderColor: "#034fb1",
      padding: "5px 10px",
      width: "25rem",
      backgroundColor: "",
      color: "",
    }),
  };
  return (
    <div className="text-white flex flex-col items-center justify-center space-y-5">
      <h1 className="border-y-3 border-[#034fb1] text-2xl py-1 text-[#034fb1] font-semibold inline-block">
        {id ? "Update" : "Add"} Account
      </h1>
      <form
        method="POST"
        onSubmit={onSubmit}
        className="flex items-center justify-center border-[#034fb1] text-[#034fb1] border-2 flex-col w-fit  px-8 py-12"
      >
        <div className="grid grid-cols-2  gap-12 mb-8">
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              Account Number
            </label>
            <input
              className="border-2 rounded-full py-2  text-center w-[25rem]"
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
            <label className="text-xl font-semibold capitalize" htmlFor="">
              under ledger
            </label>
            <Select
              value={accountOptions.find(
                (opt) => opt.value === formData.accountId
              )}
              onChange={(selectedOption) =>
                setFormData({ ...formData, accountId: selectedOption.value })
              }
              options={accountOptions}
              placeholder="Select account"
              required
              styles={customStyles}
            />
          </div>
        </div>
        <button className="border-2 rounded-full py-4 px-4 cursor-pointer">
          {id ? "update" : "Add"} Account
        </button>
      </form>
    </div>
  );
}

export default AccountFrom;
