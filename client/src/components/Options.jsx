import { MdAddBox } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
function Options({ setOptions, options }) {
  return (
    <div className="absolute top-9  right-[2%] z-10">
      <div className="flex flex-col bg-slate-100 shadow-2xl   w-[9rem] h-[9rem] px-3 py-4  capitalize font-semibold rounded-lg text-[#034fb1] space-y-5 relative cursor-pointer">
        <FaCaretUp className="absolute text-slate-100 text-4xl top-[-13%] right-[-4%]  z-0" />
        <Link to="/account/addAccount" className="flex items-center gap-1">
          <MdAddBox className="text-xl" />
          add
        </Link>
        <Link to={`/account/${options.id}`} className="flex items-center gap-1">
          <FaEdit className="text-xl" />
          edit
        </Link>
        <span className="flex items-center gap-1">
          <RiDeleteBin7Fill className="text-xl" />
          delete
        </span>
        <button
          onClick={() => setOptions(null)}
          className="absolute top-0 right-0 -translate-x-2 translate-y-2 cursor-pointer"
        >
          <IoIosCloseCircle className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Options;
