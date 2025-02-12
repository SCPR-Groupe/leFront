import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between px-[10em] pt-10">
        
        <img src="kalam.png" alt=""  width={50} />


        <div className="flex items-center justify-center space-x-8 text-[#b0b0b0] text-[1.2em]">

        <Link to="/Accueil" className="relative flex items-center justify-center lg:justify-start md:space-x-3 hover:border-b-[3px] border-jaune hover:text-blanc" >
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
    </>
  );
};

export default Header;
