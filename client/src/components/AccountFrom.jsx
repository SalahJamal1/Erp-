import { useParams } from "react-router-dom";
import {
  getAcc,
  getAccountByAccountName,
  getAccountById,
} from "../services/apiErp";
import { useEffect, useState } from "react";

function AccountFrom() {
  const [account, setAccount] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [parentAccounts, setparentAccounts] = useState({});
  const [select, setSelect] = useState("");

  const id = useParams();
  useEffect(() => {
    async function getAccount() {
      if (id?.id) {
        const res = await getAccountById(+id.id);
        setAccount(res);
      }
      const data = await getAcc();
      setAccounts(data);
    }
    getAccount();
  }, [id?.id]);

  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    openingBalance: "",
    level: "",
  });
  useEffect(() => {
    setFormData({
      accountName: account.accountName || "",
      accountNumber: account.accountNumber || "",
      openingBalance: account.openingBalance || "",
      level: account.level || "",
    });
  }, [account]);

  useEffect(() => {
    async function getParent() {
      if (select) {
        const data = await getAccountByAccountName(`${select} `);
        setparentAccounts(data);
      }
    }
    getParent();
  }, [select]);
  console.log(parentAccounts);
  function handelChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className=" text-white flex items-center justify-center">
      <form className="flex items-center justify-center flex-col w-fit bg-blue-700 px-8 py-12">
        <div className="flex  gap-12 mb-8">
          <div className="flex flex-col items-center gap-4">
            <label className="text-xl font-semibold" htmlFor="">
              Account Number
            </label>
            <input
              className="border-2 rounded-full py-2 text-white text-center"
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
              className="border-2 rounded-full py-2 text-center"
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
              className="border-2 rounded-full py-2 text-center"
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
              className="border-2  px-4 py-2 text-center w-36 rounded-full"
            >
              <option value="">select account</option>
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.accountName}>
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
