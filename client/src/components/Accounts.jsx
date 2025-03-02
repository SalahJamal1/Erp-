import { useState } from "react";
import { Account } from "./Account";
function Accounts({ account, handelOption, options, setOptions }) {
  const [showForm, setShowForm] = useState(true);

  return (
    <div>
      <Account
        account={account}
        showForm={showForm}
        setShowForm={setShowForm}
        handelOption={handelOption}
        options={options}
        setOptions={setOptions}
      />
      {showForm && (
        <ul>
          {account.subAccounts.map((account) => (
            <Accounts
              key={account.id}
              account={account}
              handelOption={handelOption}
              options={options}
              setOptions={setOptions}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Accounts;
