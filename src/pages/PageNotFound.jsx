import { Link } from "react-router-dom";
import logo_404 from "../assets/img/page_not_found_img/error.png";

function PageNotFound() {
  return (
    <div className="flex   text-white flex-col items-center justify-center  p-10">
      <img className="w-96 mx-auto " src={logo_404} alt="404-page-not-found" />
      <p className="font-bold md:text-3xl  sm:text-2xl text-xl p-4 text-white">
        Sorry the page you are looking for does not exist.
      </p>
      <button className="hover:bg-green-800 bg-[#0dff1c] w-[190px] h-[60px]  rounded-md font-medium my-4 py-3 text-black">
        <button>
          <Link to="/">GO BACK HOME</Link>
        </button>
      </button>
    </div>
  );
}

export default PageNotFound;
