import { MdAddBox } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
function Options({ setOptions, options }) {
  return (
    <div className="fixed top-[34%] right-[30%]">
      <div className="flex flex-col bg-blue-800  w-[9rem] h-[9rem] px-6 py-8  capitalize font-semibold rounded-lg text-white space-y-2 relative cursor-pointer">
        <Link to="/account/addAccount" className="flex items-center gap-1">
          <MdAddBox />
          add
        </Link>
        <Link to={`/account/${options.id}`} className="flex items-center gap-1">
          <FaEdit />
          edit
        </Link>
        <span className="flex items-center gap-1">
          <RiDeleteBin7Fill />
          delete
        </span>
        <button
          onClick={() => setOptions(null)}
          className="absolute top-0 right-0 -translate-x-2 translate-y-2"
        >
          <IoIosCloseCircle className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Options;
