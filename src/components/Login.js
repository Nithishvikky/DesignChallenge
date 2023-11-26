import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
		email: '',
		password: ''
	});
    const handleChange = (e) => {
      const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value,
      });
    };
    const handleLogin = () =>{
      localStorage.setItem("loginStatus",true);
    }

  return (
    <div class="w-full rounded-lg">
    <div class="p-6 space-y-4 ">
        <h1 class="text-xl font-extrabold leading-tight tracking-tight">
            Sign in to your account
        </h1>
        <form class="space-y-4" onSubmit={handleLogin}>
            <div>
                <label for="email" class="block mb-2 text-sm font-bold">Your email</label>
                <input type="email" onChange={handleChange} name="email" id="email" value={formData.email} class=" border border-gray-300  sm:text-sm rounded-lg  block w-full p-2.5" placeholder="name@gmail.com" required=""/>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-bold">Password</label>
                <input type="password" onChange={handleChange} name="password" value={formData.password} id="password" placeholder="••••••••" class="border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5" required=""/>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border  rounded " required=""/>
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="font-bold">Remember me</label>
                    </div>
                </div>
                <a href="#" class="text-sm font-bold  hover:underline">Forgot password?</a>
            </div>
            <button type="submit" class="w-full border border-black hover:bg-[#F56565]  hover:border-none font-bold rounded-lg text-sm px-5 py-2.5 text-center"><Link to="/">Sign in</Link></button>
        </form>
    </div>
    </div>
  )
}
