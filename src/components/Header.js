import React, { useEffect } from 'react';
import logo from '../assets/Netflix_Logo.png';
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


import { onAuthStateChanged } from 'firebase/auth';
import {gptToggleShow} from '../utils/GptSlice';





const Header = () => {

  const user=useSelector(s=>s.user);

  const dispatch=useDispatch();

    const navigate=useNavigate();

    function handleLogOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
    }

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(user)=>{
        if(user){
          const {uid,email,displayName}=user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email}));
       navigate('/browse')
        }
        else {
          dispatch(removeUser());
  navigate('/') 
        }
      });
  
      return ()=>{unsubscribe();}
    
        },[])

// for toggling Gpt Search toggling page
        function gptToggle(){
           dispatch(gptToggleShow())
        };
        
     
const gptBtnShow=useSelector(s=>s.gpt.gptShow);


  return (
    <>
    <div className=' bg-black text-white absolute z-10 w-full'>
    <div className='flex justify-between p-6 '>
        <img className='h-10 md:h-16' src={logo} alt=''/>
       {user&& <div className='flex flex-col md:flex-row md:items-center items-end  gap-4'>
            
          <h1 className='text-sm md:text-xl font-bold'> ({user.displayName})</h1>
         

        <div className='flex gap-3'>
          <button className=' text-sm px-2 py-1 md:px-8 md:py-2 bg-cyan-600 text-white rounded-sm' onClick={gptToggle}>{gptBtnShow?'Home':'Gpt Search'}</button>
            <button className=' text-sm px-2 py-1 md:px-8 md:py-2 bg-red-600 text-white rounded-sm' onClick={handleLogOut}>Log out</button>
            </div>
            

        </div>}
    </div>
    </div>
    </>
  )
}

export default Header