import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import LoginValidation from "../utils/LoginInValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "../components/Header";
import FormValidation from "../utils/FormValidation";

const Login = () => {
  const navigate = useNavigate();

  //for changing sign in log in button
  const [sign, setSign] = useState(true);
  function toggleBtn() {
    setSign(!sign);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errSignIn, setErrSignIn] = useState("");
  const [errLogIn,setErrLogIn]=useState('');

  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    let msg = LoginValidation(email, password);
    setErrLogIn(msg);
    if (msg) return;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, { displayName: email })
            .then(() => {
              const { uid, email } = auth.currentUser;
              dispatch(addUser({ uid: uid, displayName: email, email: email }));
            })
            .catch((err) => {
              setErrLogIn(err.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrLogIn(errorMessage);
        });
      
      
    }
  
    function handleSignIn(e){

     e.preventDefault();
     let msg=FormValidation(name,email,password);
     setErrSignIn(msg);
     if(msg) return;

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, { displayName: name })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, displayName: displayName, email: email })
            );
          })
          .catch((err) => {
            setErrSignIn(err.message);
          });
        navigate("/browse");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrSignIn(errorMessage);
      });

     
     
    }

  return (
    <><Header />
      <div className="relative top-14">
      
        <img
          className="hidden md:block w-full md:h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        />
        <div className="w-full md:w-[400px] h-screen md:h-[500px] bg-black p-4 md:absolute md:top-[20%]  md:left-[30%] xl:left-[35%]">
          <div className="">
            {/* <img className="h-20 md:hidden " src={logo} alt="logo" /> */}
            <h1 className="text-3xl text-white ml-6 mt-4">
              {sign ? "Sign in" : "Log In"}
            </h1>
            <form className="p-4 mt-6">
              {sign && (
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="border w-full h-12 text-center outline-none bg-gray-300 mb-5"
                  onChange={function (e) {
                    setName(e.target.value);
                  }}
                
                />
              )}
              <input
                type="email"
                required
                placeholder="Email"
                className="border w-full h-12 text-center outline-none bg-gray-300"
                onChange={function (e) {
                  setEmail(e.target.value);
                }}
                
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="border w-full h-12 text-center outline-none bg-gray-300 my-6"
                onChange={function (e) {
                  setPassword(e.target.value);
                }}
               
              />
              {sign&&<h1 className="text-2xl text-red-700 mb-4">{errSignIn}</h1>}
              {!sign&&<h1 className="text-2xl text-red-700 mb-4">{errLogIn}</h1>}

             {!sign&& <button className="bg-red-700 w-full px-10 py-3 text-white rounded-md" onClick={handleLogin}>Log in</button>}
            { sign&& <button className="bg-red-700 w-full px-10 py-3 text-white rounded-md" onClick={handleSignIn}>Sign in </button>}
              {/* <button
                className="bg-red-700 w-full px-10 py-3 text-white rounded-md"
                onClick={handleLogin}
              >
                {sign ? "Sign in" : "Log In"}
              </button> */}
            </form>
            <h1 className="ml-4 mt-2 text-gray-500">
              {sign ? "Already an user?" : "New to Netflix"}{" "}
              <p
                className="text-xl text-white cursor-pointer"
                onClick={toggleBtn}
              >
                {sign ? "Log in" : "Sign up"}{" "}
              </p>
            </h1>
          </div>
        </div>
        {/* big screen logo  */}

          
          {/* <img className='h-20 hidden md:block ' src={logo} alt='logo'/> */}
        
      </div>
    </>
  );
};

export default Login;
