import { useState } from "react";
import { Account } from "./Account";
function Accounts({ account }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Account
        account={account}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {showForm && (
        <ul>
          {account.subAccounts.map((account) => (
            <Accounts key={account.id} account={account} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Accounts;
