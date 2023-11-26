import React from 'react';
import Boy from '../Assets/Crop.png';
import { Linkedin,Github,ShieldQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FrontDiv() {
  return (
   <div class="heading flex justify-between mt-7">
     <div>
       <ul>
        <li><h1 class="one text-6xl font-bold" style={{color:"#F56565"}}>Stylish &</h1></li>
        <li><h1 class="one text-6xl font-bold mt-1">Futuristic WebPage</h1></li>
        <li><h3 class='one text-xl mt-7'>Made by Nithish</h3></li>
        <ul class="flex flex-row gap-3 mt-7 md:flex-col sm:flex-row lg:flex-row">
         <li><Link class="m btn bg-[#f56565] text-white" to="/Checker">What's New<ShieldQuestion class="inline ml-1 mb-1"/></Link></li>
         <li><a class="btn" href="https://www.linkedin.com/in/nithish-u/" target='_blank'>Linkedin<Linkedin class="inline ml-1 mb-2"/></a></li>
         <li><a class="btn" href="https://github.com/Nithishvikky" target='_blank'>GitHub<Github class="inline ml-1 mb-1"/></a></li>
        </ul>
       </ul>
      </div>
      <div class="lg:max-w-lg px-12">
        <img alt="Nithish_U" src={Boy} style={{height:"244px"}} title=""/>
      </div>
   </div>
  )
}
