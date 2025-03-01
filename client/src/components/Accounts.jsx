import { useState } from "react";
import { Account } from "./Account";
function Accounts({ account, handelOption, options }) {
  const [showForm, setShowForm] = useState(true);

  return (
    <div>
      <Account
        account={account}
        showForm={showForm}
        setShowForm={setShowForm}
        handelOption={handelOption}
        options={options}
      />
      {showForm && (
        <ul>
          {account.subAccounts.map((account) => (
            <Accounts
              key={account.id}
              account={account}
              handelOption={handelOption}
              options={options}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Accounts;
