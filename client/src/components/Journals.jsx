import { useCallback, useEffect, useState } from "react";
import { getJouranls } from "../services/apiErp";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Journals() {
  const [journals, setJournals] = useState([]);
  const fetchJournals = useCallback(async function fetchJournals() {
    const res = await getJouranls();
    console.log(res);
    setJournals(res);
  }, []);

  useEffect(() => {
    fetchJournals();
  }, [fetchJournals]);
  return (
    <div className="text-[#034fb1]">
      <div className="flex flex-col  mb-8">
        <h1 className="border-y-3 border-[#034fb1] text-2xl py-1 text-[#034fb1] font-semibold inline-block mb-8 self-center">
          Journal Entry
        </h1>
        <Link
          to="/account/journal"
          className="border-2 border-[#034fb1] rounded-full py-3 px-4 cursor-pointer text-[#034fb1] capitalize font-semibold self-end"
        >
          add journal
        </Link>
      </div>
      <div>
        <div className="border-2 border-[#034fb1] grid grid-cols-3 px-4 capitalize py-2 font-semibold">
          <span>Jouranl No.</span>
          <span className="col-span-2 ml-6">date</span>
        </div>
        <ul className=" divide-y divide-[#034fb1] border-b border-[#034fb1]">
          {journals.map((jo) => (
            <li className="py-4 grid grid-cols-3 justify-between px-4 font-semibold">
              <span className="ml-6">{jo.id}</span>
              <span>{jo.entryDate}</span>

              <div className="flex justify-end space-x-4 capitalize">
                <Link
                  to={`/account/journal/${jo.id}`}
                  className="flex items-center gap-1 capitalize"
                >
                  <FaEdit className="text-xl" />
                  edit
                </Link>
                <button className="flex items-center gap-1 capitalize">
                  <RiDeleteBin7Fill className="text-xl" />
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Journals;
