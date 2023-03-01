import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" sticky top-0 z-10 header text-3xl flex justify-between text-red-500 font-bold p-3 border-b-2 border-gray-400 bg-slate-800 ">
      <Link to={"/"}>
        <span>
          Filmy
          <span className="text-white">Verse</span>
        </span>
      </Link>

      <Link to={`/addmovie`}>
        <h1 className="text-2xl text-white flex items-center justify-center cursor-pointer">
          <button className=" hover:opacity-80">
            <AddIcon className=" mr-1     " color="secondary" />
            Add New
          </button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
