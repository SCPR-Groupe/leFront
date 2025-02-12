import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, ListIcon, X } from "lucide-react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const clickMenue = () => {
    setMenu(true);
  }
  const clickX = () => {
    setMenu(false);
  }

  return (
    <>
      <div className="w-full flex items-center justify-between px-[3em] lg:px-[10em] pt-10">

        <img src="kalam.png" alt="" width={50} />

        <div className="hidden md:block">
          <div className="flex items-center justify-center space-x-8 text-[#b0b0b0]  text-[1.2em]">

            <Link to="/Accueil"  className="relative flex items-center justify-center lg:justify-start md:space-x-3 hover:border-b-[3px] border-jaune hover:text-blanc" >
              Accueil
            </Link>
            <Link to="/" className="relative flex items-center justify-center lg:justify-start md:space-x-3 hover:border-b-[3px] border-jaune hover:text-blanc" >
              Connexion
            </Link>

            <Link to="/inscription" className="relative flex items-center justify-center lg:justify-start md:space-x-3 hover:border-b-[3px] border-jaune hover:text-blanc" >
              Inscription
            </Link>

            <Link to="" className="relative flex items-center justify-center lg:justify-start md:space-x-3 hover:border-b-[3px] border-jaune hover:text-blanc" >
              About
            </Link>

            <Link to="/contact" className="relative flex items-center justify-center lg:justify-start md:space-x-3 hover:border-b-[3px] border-jaune hover:text-blanc" >
              Contact us
            </Link>

          </div>
        </div>
        <div>
          
            
              <button className={`${menu? 'block': 'hidden'}`} onClick={() => clickX()}>
                <X className="block md:hidden text-blanc cursor-pointer" size={45} />
              </button>
              
              <button className={`${menu? 'hidden': 'block'}`} onClick={() => clickMenue()}>
                <ListIcon className="block md:hidden text-blanc cursor-pointer" size={45} />
              </button>
          
        </div>
      </div>
      <div className={`
      absolute z-40  bg-[#2a2c3b] h-[25rem] w-[15rem] transition-all duration-200 md:hidden
      ${menu? 'right-6' : 'right-[-15rem]'}
        `}>
        <div className="">
          <Link to="/Accueil" className="relative flex items-center justify-center py-7 text-blanc">Accueil</Link>
          <Link to="/" className="relative flex items-center justify-center py-7 text-blanc">Connexion</Link>
          <Link to="inscription" className="relative flex items-center justify-center py-7 text-blanc">Inscription</Link>
          <Link to="" className="relative flex items-center justify-center py-7 text-blanc">About</Link>
          <Link to="/contact" className="relative flex items-center justify-center py-7 text-blanc">Contact us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
