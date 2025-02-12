import { Lock, Mail, Save } from "lucide-react";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import functionFade from "../../PurJs/FunctionContactJs";

const Incription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoding] = useState(false);
  const [mdp, setMdp] = useState("");
  const [cMdp, setCmdp] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const inscrire = (e) => {
   
  };
  useEffect(() => {
    const vr = '.register';
    const nb = 5000
    functionFade(vr,nb);
    // $(vr).fadeIn(nb);
  }, []);
  return (
    <div className="px-[10em] py-8 flex items-center justify-center mt-2">
      <div className="text-center text-blanc py-3 border-[2px] rounded-xl px-7 w-[22rem] register hidden">
        <p className="text-[2em] font-bold">INSCRIPTION</p>
        <p className="text-[14px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        <form className="my-4" onSubmit={inscrire}>
          <div className="relative my-4">
            <Mail className="text-sombre absolute top-2 left-3" />
            <input
              type="email"
              className="tailwind-form bg-gray-200 pl-12"
              placeholder="exemple@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative my-4">
            <Lock className="text-sombre absolute top-2 left-3" />
            <input
              type="password"
              className="tailwind-form bg-gray-200 pl-12"
              placeholder="mot de passe"
              onChange={(e) => setMdp(e.target.value)}
              required
            />
          </div>

          <div className="relative my-4">
            <Lock className="text-sombre absolute top-2 left-3" />
            <input
              type="password"
              className="tailwind-form bg-gray-200 pl-12"
              placeholder="confirmer mot de passe"
              onChange={(e) => setCmdp(e.target.value)}
              required
            />
          </div>

          <button className="flex items-center justify-center space-x-3 py-2 rounded-md bg-jaune w-full text-sombre my-4">
    
            {loading ? <ClipLoader size={18} /> : <Save />}
            <p>Enregistrer</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Incription;
