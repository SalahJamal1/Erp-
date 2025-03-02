import { useEffect } from "react";
import { useSelector } from "react-redux";
import Accounts from "./Accounts";
import useAccounts from "../hooks/useAccounts";

function Chart_Accounts() {
  const { accounts } = useSelector((store) => store.chartAccount);
  const { fetchAccounts } = useAccounts();

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  const account = [...accounts.filter((acc) => acc.level === 1)];

  return (
    <>
      <div className="text-center">
        <h1 className="inline-block mb-8 border-y-3 border-[#034fb1] text-2xl py-1 text-[#034fb1] font-semibold">
          Chart of Accounts
        </h1>
        <ul className="space-y-6">
          {account.map((account) => (
            <Accounts key={account.id} account={account} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Chart_Accounts;
