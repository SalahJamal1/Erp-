import { useEffect, useState } from "react";
import { getAccounts } from "../services/apiErp";

import Accounts from "./Accounts";

function Chart_Accounts() {
  const [accounts, setAccounts] = useState([]);
  async function fetchAccounts() {
    const res = await getAccounts();
    setAccounts(res);
  }
  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="text-center">
      <h1 className="inline-block mb-8 border-y-3 border-blue-800 text-2xl py-1 text-blue-800 font-semibold">
        Chart of Accounts
      </h1>
      <ul className="space-y-14">
        {accounts.map((account) => (
          <Accounts key={account.id} account={account} />
        ))}
      </ul>
    </div>
  );
}

export default Chart_Accounts;
