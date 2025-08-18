import { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../shared/assets/LOGOTYPE – BILETICK (2).svg";
import { FaCloudMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi2";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [theme, seTheme] = useState(
    localStorage.getItem("togleMode") || "ligth"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.background = "black";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "white";
    }
  }, [theme]);

  const handleMode = () => {
    if (theme === "dark") {
      localStorage.setItem("togleMode", "light");
      seTheme("light");
    } else {
      localStorage.setItem("togleMode", "dark");
      seTheme("dark");
    }
  };

  return (
    <header className="dark:bg-gray-950">
      <div className="continer  flex justify-between items-center px-[16px] py-[10px] pb-[30px] pt-[20px]">
        <div className="max-[800px]:w-[70px]">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="flex justify-between gap-7 text-center">
          <NavLink
            to={"/"}
            end={true}
            className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-500")}
          >
            <span className="items-center flex flex-col ">
              <IoHomeOutline className="text-[24px]" />
            </span>
            Home
          </NavLink>

          <NavLink
            to={"/movie"}
            className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-500")}
          >
            <span className="items-center flex flex-col ">
              <BiMoviePlay className="text-[24px]"/>
            </span>
            Movie
          </NavLink>

          <NavLink
            to={"/ticket"}
            className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-500")}
          >
            <span className="items-center flex flex-col ">
             <HiOutlineTicket className="text-[24px]"/>
            </span>
            ticket
          </NavLink>

          <NavLink
            to={"/Search"}
            className={({ isActive }) => (isActive ? "text-red-500 max-[650px]:hidden" : "text-gray-500  max-[650px]:hidden")}
          >
            <span className="items-center flex flex-col">
              <IoSearch className="text-[24px]"/>
            </span>
              Search
          </NavLink>
          <div className="hidden max-[650px]:flex items-center dark:text-gray-500">
            < AiOutlineBars className="text-[30px]"/>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <select
            className="bg-[#0E0E0E] text-white w-[80px] h-[40px] rounded-[12px] px-1 outline-none max-[650px]:hidden"
            name="language"
            id=""
          >
            <option value="eng">Eng</option>
            <option value="rus">Rus</option>
            <option value="uzb">Uzb</option>
          </select>
          <button className="max-[650px]:hidden w-[160px] h-[50px] rounded-[12px] text-white bg-[#C61F1F] max-[800px]:w-[80px] max-[800px]:h-[30px]">
            Войти
          </button>

          <div className="mx-[10px]" onClick={() => handleMode()}>
            <span className="font-bold text-[25px] cursor-pointer dark:text-white">
              {theme == "dark" ? <GoSun /> : <FaCloudMoon />}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
