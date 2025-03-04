import { useEffect, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";

import Select from "react-select";
import useAccounts from "../hooks/useAccounts";
import { createJouranl } from "../services/apiErp";
import { useNavigate } from "react-router-dom";
function Journal() {
  const { accounts } = useSelector((store) => store.chartAccount);
  const { fetchAccounts } = useAccounts();
  const [entryDate, setEntryDate] = useState("");
  const [description, setDescription] = useState("");
  const [journalEntryDetails, setJournalEntryDetails] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState([
    {
      id: "",
      accountId: "",
      type: "",
      amount: "",
    },
    {
      id: "",
      accountId: "",
      type: "",
      amount: "",
    },
  ]);
  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);
  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: "20px",
      border: "2px solid #034fb1",
      borderColor: "#034fb1",
      padding: "5px 10px",
      width: "15rem",
      backgroundColor: "",
      color: "white !important",
    }),
  };

  const customStyle = {
    control: (base) => ({
      ...base,
      borderRadius: "20px",
      border: "2px solid #034fb1",
      borderColor: "#034fb1",
      padding: "5px 10px",
      width: "8rem",
      backgroundColor: "",
      color: "white !important",
    }),
  };
  const accountOptions = accounts
    .filter((el) => el.level > 2)
    .map((acc) => ({
      label: `${acc.accountNumber} ${acc.accountName}`,
      value: acc.id,
    }));

  function onChange(i, name, value) {
    const newDetails = [...formData];

    newDetails[i][name] = value;
    newDetails[i].id = i;
    setFormData(newDetails);
  }

  function addForm() {
    setFormData((prev) => [...prev, { accountId: "", type: "", amount: "" }]);
  }
  function deleteForm(value) {
    setFormData((prev) => prev.filter((acc) => acc.id !== value));
  }

  useEffect(() => {
    const data = formData.map((el) => ({
      account: {
        id: el.accountId,
      },
      debit: el.type === "debit" ? el.amount : 0,
      credit: el.type === "credit" ? el.amount : 0,
    }));
    if (data.length > 0) {
      setJournalEntryDetails(data);
    }
  }, [formData]);
  const typeOptions = [
    {
      value: "debit",
      label: "Dr",
    },
    {
      value: "credit",
      label: "Cr",
    },
  ];

  async function onSubmit(e) {
    e.preventDefault();
    if (!entryDate || journalEntryDetails.length <= 1)
      return alert("the filed is required");
    const newJournal = {
      entryDate,
      description,
      journalEntryDetails,
    };
    await createJouranl(newJournal);
    navigate("/");
  }
  return (
    <div className="space-y-8 text-center text-[#034fb1]">
      <h1 className="border-y-3 border-[#034fb1] text-2xl py-1 text-[#034fb1] font-semibold inline-block">
        Journal Entry
      </h1>
      <div className="flex items-center justify-between">
        <input
          type="date"
          className="border-2 rounded-4xl px-4 py-2 border-[#034fb1]  w-[10rem] text-black"
          value={entryDate}
          onChange={(e) => setEntryDate(e.target.value)}
        />
        <IoIosAddCircle className="text-4xl text-[#034fb1]" onClick={addForm} />
      </div>
      <form
        method="POST"
        className="grid grid-cols-1 space-y-12"
        onSubmit={onSubmit}
      >
        {formData.map((_, i) => (
          <div className="flex items-center justify-between" key={i}>
            <Select
              styles={customStyle}
              options={typeOptions}
              required
              onChange={(e) => onChange(i, "type", e.value)}
            />
            <div className="flex gap-4 items-center">
              <label className="text-xl font-semibold" htmlFor="">
                Amount
              </label>

              <input
                className="border-2 rounded-full py-2 border-[#034fb1] text-center w-[10rem]"
                type="text"
                placeholder="Debit"
                required
                onChange={(e) => onChange(i, "amount", e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-xl font-semibold" htmlFor="">
                Account
              </label>
              <Select
                styles={customStyles}
                options={accountOptions}
                onChange={(e) => onChange(i, "accountId", e.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaCircleMinus
                className="text-xl"
                onClick={() => deleteForm(i)}
              />
              <IoIosAddCircle className="text-2xl" onClick={addForm} />
            </div>
          </div>
        ))}

        <div className="flex items-end justify-between">
          <textarea
            className="border-2 border-[#034fb1] p-4 w-1/2 h-[10rem] "
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="border-2 rounded-full py-4 px-4 cursor-pointer w-[9rem] text-xl font-semibold">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Journal;
