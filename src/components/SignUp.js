import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Netflix_Logo.png";
import FormValidation from "../utils/FormValidation";
import {  useState } from "react";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const SignUp = () => {



    const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //For error message when name,email or password is not of valid form 
  const [err,setErr]=useState('')

  const dispatch=useDispatch();

  function handleSignInValidate(e) {
    e.preventDefault();
let msg=FormValidation(name,email,password);
setErr(msg);

if(msg) return ;

//sign up logic
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user,{displayName:name}).then(()=>{
      const{uid,email,displayName}=auth.currentUser;
      dispatch(addUser({uid:uid,displayName:displayName,email:email}))
    }).catch((err)=>{setErr(err.message)});
    navigate('/browse')
  })
  .catch((error) => {
    const errorMessage = error.message;
    setErr(errorMessage);
  });

  }

  return (
    <>
      <div className="">
        <img
          className="hidden md:block w-full md:h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        />
        <div className="w-full md:w-[400px] h-screen md:h-[550px] bg-black p-4 md:absolute md:top-[20%]  md:left-[30%] xl:left-[35%]">
          <div className="">
            <img className="h-20 md:hidden " src={logo} alt="logo" />
            <h1 className="text-3xl text-white ml-6 mt-4">Sign Up</h1>
            <form className="p-4 mt-6">
              <input
                onChange={function(e){setName(e.target.value)}}
                value={name}
                type="text"
                required
                placeholder="UserName"
                className="border w-full h-12 text-center outline-none bg-gray-300"
              />

              <input
               onChange={function(e){setEmail(e.target.value)}}
               value={email}
                type="email"
                required
                placeholder="Email"
                className="border w-full h-12 text-center outline-none bg-gray-300 mt-6"
              />
              <input
                onChange={function(e){setPassword(e.target.value)}}
                value={password}
                type="password"
                required
                placeholder="Password"
                className="border w-full h-12 text-center outline-none bg-gray-300 mt-6"
              />
              <h1 className="text-2xl text-red-700 my-4">{err}</h1>
              <button
                className="bg-red-700 w-full px-10 py-3 text-white rounded-md"
                onClick={handleSignInValidate}
              >
                Sign Up
              </button>
            </form>
            <h1 className="ml-4 my-4 text-gray-500">
              Already an User?{" "}
              <Link to="/" className="text-xl text-white">
                Login here{" "}
              </Link>
            </h1>
          </div>
        </div>
        {/* big screen logo  */}
        <div className="bg-gradient-to-b from-black absolute top-0 w-full ">
          <Header/>
          {/* <img className="h-20 hidden md:block " src={logo} alt="logo" /> */}
        </div>
      </div>
    </>
  );
};

export default SignUp;
