import { Lock, Mail, Wifi } from "lucide-react";
import React, { useEffect } from "react";
import $ from "jquery"

const Login = () => {
  useEffect(()=>{
    $('.login').fadeIn(2000);
  }, [])
  return (
    <div className="px-[10em] py-8 flex items-center justify-center mt-2">
      <div className="text-center text-blanc py-3 border-[2px] rounded-xl px-7 w-[22rem] login hidden">
        <p className="text-[2em] font-bold">Se Connecter</p>
        <p className="text-[14px] ">
          Il vous mieux connecter pour introduire librement.
        </p>

        <form className="my-4">
          <div className="relative my-4">
            <Mail className="text-sombre absolute top-2 left-3" />
            <input type="email" className="tailwind-form bg-gray-200 pl-12" placeholder="exemple@gmail.com" required />
          </div>

          <div className="relative my-4">
            <Lock className="text-sombre absolute top-2 left-3" />
            <input
              type="password"
              className="tailwind-form bg-gray-200 pl-12"
              placeholder="mot de passe"
              required
            />
          </div>

          <p className="my-2 underline text-end text-blue-500">
            mot de passe oublié?
          </p>

          <button className="flex items-center justify-center space-x-3 py-2 rounded-md bg-jaune w-full text-sombre">
            <Wifi />
            <p>Connexion</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
