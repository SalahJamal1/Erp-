import { useEffect, useState } from "react";
import { getAccounts } from "../services/apiErp";

import Accounts from "./Accounts";
import Options from "./Options";
import { Outlet } from "react-router-dom";

function Chart_Accounts() {
  const [accounts, setAccounts] = useState([]);
  async function fetchAccounts() {
    const res = await getAccounts();
    setAccounts(res);
  }
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

  const [options, setOptions] = useState(null);
  const handelOption = (value) => {
    setOptions((o) => (o?.id === value?.id ? null : value));
  };
  return (
    <>
      <div className="text-center">
        <h1 className="inline-block mb-8 border-y-3 border-blue-800 text-2xl py-1 text-blue-800 font-semibold">
          Chart of Accounts
        </h1>
        <ul className="space-y-14">
          {options && <Options setOptions={setOptions} options={options} />}
          {accounts.map((account) => (
            <Accounts
              handelOption={handelOption}
              options={options}
              key={account.id}
              account={account}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Chart_Accounts;
