import React, { useEffect, useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Navbar() {
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"):"light");
    const [isLoggedin,setLoggedin] = useState(localStorage.getItem("loginStatus") ? localStorage.getItem("loginStatus"):"false");
    const handleToggle = (e) => {
        setTheme(e.target.value);
    }
    useEffect(() => {
        localStorage.setItem("theme",theme);
        setLoggedin(localStorage.getItem("loginStatus"));
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme" , localTheme)
    }, [theme,isLoggedin] );
  return (
    <header class="f fixed top-0 bg-base-100 border-b-2 p-4 w-full z-50">
      <nav class="flex items-center justify-between px-12 ">
        <div class="Name text-4xl font-bold"><Link to="/">NITHISH_U</Link></div>
        <div class="font-bold">
            <ul class="flex px-2 gap-5 text-lg items-center">
            <li class="border-r-4 pr-2">
                <div className="dropdown indicator mr-2">
                <span className="indicator-item badge badge-secondary">new</span>
                <label tabIndex={0} className="f btn text-lg hover:underline">
                Theme
                <svg width="12px" height="12px" className="fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </label>
                <ul onChange={handleToggle} tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="light"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dark" value="dark"/></li>
                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
                </ul>
                </div>
            </li>
            <li class="hover:underline"><Link to="/">Home</Link></li>
            <div class="indicator mr-4">
            <span className="indicator-item badge badge-secondary">new</span> 
            <li class="hover:underline "><Link to="/Checker">Checker</Link></li>
            </div>
             {isLoggedin ? <i class="fa-solid fa-circle-user fa-2xl"></i>:<li onClick={()=>document.getElementById('my_modal_5').showModal()} class="cursor-pointer hover:underline">Login</li>}
            </ul>
        </div>
      </nav>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <Login/>
          </div>
          <form method="dialog" className="modal-backdrop">
                      <button>close</button>
               </form>
      </dialog>
    </header>
  )
}
