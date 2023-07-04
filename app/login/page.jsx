"use client";
import { useState, useEffect } from "react";
import { signIn, getProviders  } from "next-auth/react";
import plate from "@public/assets/plate.png";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden flex flex-row justify-evenly">
      <div className="flex flex-col justify-center w-1/2 p-4">
        <p className="font-reem text-contrast2 text-[32px] font-bold pb-2">
          Log in with Google
        </p>
        <p className="font-sen text-contrast2 text-[13px] pb-6">
          Discover more receipes, keep track of items in your shopping list,
          post your own baking ideas and much more!
        </p>
        <div className="flex justify-center">
          <Image src={plate} alt="plate" className="w-[250px]" />
        </div>
        <div className="flex justify-center p-6">
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                className="logButton"
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id, { callbackUrl: 'http://localhost:3000/profile' }); 
                }}
              >
                <GoogleIcon sx={{ fontSize: 20 }} />
                <p>login</p>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
