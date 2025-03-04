import { MdAddBox } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCaretUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../store/accountSlice";
import useOption from "../hooks/useOption";
import { deleteAccount } from "../services/apiErp";
import useAccounts from "../hooks/useAccounts";
function Options({ show }) {
  const { options } = useSelector((store) => store.chartAccount);
  const dispatch = useDispatch();
  const { fetchAccounts } = useAccounts();
  async function onClick() {
    await deleteAccount(options.id);
    fetchAccounts();
  }
  useOption();
  if (show)
    return (
      <div className="absolute top-9  right-[2%] z-10 transition-all duration-150">
        <div
          className={`flex flex-col bg-slate-100 shadow-2xl   w-[9rem]  px-3 py-4 ${
            options.level < 5 ? "h-[9rem]" : "h-[7rem]"
          }  capitalize font-semibold rounded-lg text-[#034fb1] space-y-5 relative cursor-pointer`}
        >
          <FaCaretUp className="absolute text-slate-100 text-4xl top-[-13%] right-[-4%]  z-0" />
          {options.level < 5 && (
            <Link to="/account/addAccount" className="flex items-center gap-1">
              <MdAddBox className="text-xl" />
              add
            </Link>
          )}
          <Link
            to={`/account/${options.id}`}
            className="flex items-center gap-1"
          >
            <FaEdit className="text-xl" />
            edit
          </Link>
          <span className="flex items-center gap-1" onClick={onClick}>
            <RiDeleteBin7Fill className="text-xl" />
            delete
          </span>

          <IoIosCloseCircle
            onClick={() => dispatch(setOption(null))}
            className="text-xl absolute top-0 right-0 -translate-x-2 translate-y-2 cursor-pointer"
          />
        </div>
      </div>
    );
}

export default Options;
