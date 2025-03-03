import { useEffect, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";

import Select from "react-select";
import useAccounts from "../hooks/useAccounts";
function Journal() {
  const { accounts } = useSelector((store) => store.chartAccount);

  const { fetchAccounts } = useAccounts();

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

  return (
    <div className="space-y-8 text-center text-[#034fb1]">
      <h1 className="border-y-3 border-[#034fb1] text-2xl py-1 text-[#034fb1] font-semibold inline-block">
        Journal Entry
      </h1>
      <div className="flex items-center justify-between">
        <input
          type="date"
          className="border-2 rounded-4xl px-4 py-2 border-[#034fb1]  w-[10rem] text-black"
        />
        <IoIosAddCircle className="text-4xl text-[#034fb1]" />
      </div>
      <form method="POST" className="grid grid-cols-1 space-y-12">
        <div className="flex items-center justify-between">
          <Select styles={customStyle} required />
          <div className="flex gap-4 items-center">
            <label className="text-xl font-semibold" htmlFor="">
              Amount
            </label>
            <input
              className="border-2 rounded-full py-2 border-[#034fb1] text-center w-[10rem]"
              type="text"
              placeholder="Debit"
              required
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-xl font-semibold" htmlFor="">
              Account
            </label>
            <Select styles={customStyles} />
          </div>
          <div className="flex items-center gap-2">
            <FaCircleMinus className="text-xl" />
            <IoIosAddCircle className="text-2xl" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <textarea
            className="border-2 border-[#034fb1] p-4 w-1/2 h-[10rem] "
            type="text"
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
