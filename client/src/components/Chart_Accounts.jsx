import { useEffect, useState } from "react";
import { getAccounts } from "../services/apiErp";

import Accounts from "./Accounts";

function Chart_Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [options, setOptions] = useState(null);
  async function fetchAccounts() {
    const res = await getAccounts();
    setAccounts(res);
  }
  const account = [...accounts.filter((acc) => acc.level === 1)];
  useEffect(() => {
    fetchAccounts();
  }, []);
  useEffect(() => {
    const exit = (e) => {
      if (e.code === "Escape") setOptions(false);
    };

    document.querySelector("body").addEventListener("keydown", exit);
    return () =>
      document.querySelector("body").removeEventListener("keydown", exit);
  }, []);

  const handelOption = (value) => {
    setOptions((o) => (o?.id === value?.id ? null : value));
  };
  return (
    <>
      <div className="text-center">
        <h1 className="inline-block mb-8 border-y-3 border-[#034fb1] text-2xl py-1 text-[#034fb1] font-semibold">
          Chart of Accounts
        </h1>
        <ul className="space-y-6">
          {account.map((account) => (
            <Accounts
              handelOption={handelOption}
              options={options}
              key={account.id}
              account={account}
              setOptions={setOptions}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Chart_Accounts;
