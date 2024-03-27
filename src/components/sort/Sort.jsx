import { IoIosArrowDown } from "react-icons/io";

const Sort = ({handleSort,sortToggle,sorted}) => {


    return (
        <div className="my-10 ">
          <button
            onClick={handleSort }
            className="cursor-pointer w-40 flex mx-auto justify-between items-center gap-2 px-7 py-3  text-white font-bold rounded-lg bg-[#23BE0A]"
          >
            Sort By
            <IoIosArrowDown
              style={!sortToggle && { transform: "rotate(-180deg)" }}
              className="text-xl duration-200"
            ></IoIosArrowDown>
          </button>

          <ul style={ sortToggle ? {display:"none"} : {display:"block"}} className="p-2 mt-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 font-semibold mx-auto">
            <li onClick={() => sorted("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={sorted}>
              <a>Number of Page</a>
            </li>
            <li onClick={sorted}>
              <a>Published Year</a>
            </li>
          </ul>

        </div>
    );
};

export default Sort;