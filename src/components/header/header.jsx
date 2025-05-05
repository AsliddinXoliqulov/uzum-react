import React from "react";
import flag from "../../assets/flag.png";
import logo from "../../assets/logo.png";
import bloknot from "../../assets/bloknot.png";
import foiz from "../../assets/foiz.png";
import nasiya from "../../assets/nasiya.png";
import sumka from "../../assets/sumka.png";

const Header = ({ search, handleSearch }) => {
  return (
    <header className="w-[90%] m-auto">
      {/* Yuqori panel */}
      <div className="flex justify-between items-center bg-gray-100 px-1 h-10">
        <p className="flex gap-1 items-center">
          <i className="fa-solid fa-location-dot"></i> Shahar: Toshkent
        </p>
        <div className="flex items-center gap-5">
          <ul className="md:flex items-center gap-5 hidden">
            <li className="hover:text-blue-600">Uzumda soting</li>
            <li className="hover:text-blue-600">Savol-Javoblar</li>
            <li className="hover:text-blue-600">Buyurtmalarim</li>
          </ul>
          <img src={flag} alt="flag" />
          <p>Oʻzbekcha</p>
        </div>
      </div>

      {/* Logo + Search + Icons */}
      <div className="flex flex-col sm:flex-row sm:my-0 my-5 items-center justify-between gap-5 h-20">
        <img src={logo} alt="logo" />
        
        {/* Katalog va qidiruv (faqat katta ekran uchun) */}
        <div className="xl:flex items-center gap-5 hidden">
          <button className="bg-purple-100 text-purple-600 px-3 py-2 rounded hidden sm:flex items-center gap-1 font-semibold">
            <i className="fa-solid fa-bars"></i> Katalog
          </button>
          <div className="flex items-center gap-5 pr-5 border-gray-300 border w-[550px] bg-gray-300">
            <input
              id="search"
              type="text"
              placeholder="Mahsulotlar va turkumlar izlash"
              className="focus:outline-none w-full p-2 text-sm border-r border-gray-300 bg-white"
              value={search}
              onChange={handleSearch}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* Foydalanuvchi ikonkalari */}
        <div>
          <ul className="flex items-center gap-3">
            <li className="flex items-center gap-2">
              <i className="text-gray-400 fa-solid fa-user"></i> Kirish
            </li>
            <li className="flex items-center gap-2">
              <i className="text-gray-400 fa-solid fa-heart"></i> Like
            </li>
            <li className="flex items-center gap-2">
              <i className="text-gray-400 fa-solid fa-cart-shopping"></i> Shop
            </li>
          </ul>
        </div>
      </div>

      {/* Responsive search (kichik ekranlar uchun) */}
      <div className="flex items-center sm:gap-5 justify-center w-full mb-5 xl:hidden">
        <button className="bg-purple-100 text-purple-600 px-3 py-2 rounded flex items-center gap-1 font-semibold">
          <i className="fa-solid fa-bars"></i> Katalog
        </button>
        <div className="flex items-center gap-5 pr-5 border-gray-300 border bg-gray-300">
          <input
            id="search"
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            className="focus:outline-none md:w-[500px] p-2 text-sm border-r border-gray-300 bg-white"
            value={search}
            onChange={handleSearch}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {/* Pastgi banner menyular */}
      <div>
        <ul className="flex gap-5 items-center justify-between flex-wrap">
          <li className="flex gap-1 items-center">
            <img className="w-6 h-6" src={sumka} alt="sumka" /> Maktab bozori
          </li>
          <li className="flex gap-1 items-center">
            <img className="w-6 h-6" src={foiz} alt="foiz" /> Yozgi savdo
          </li>
          <li className="flex gap-1 items-center">
            <img className="w-6 h-6" src={bloknot} alt="bloknot" /> Kanselyariya
          </li>
          <li className="flex gap-1 items-center">
            <img className="w-6 h-6" src={nasiya} alt="nasiya" /> Nasiya
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
