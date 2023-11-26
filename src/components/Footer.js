import React from 'react';
import { Linkedin,Github,Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer class='f bottom-0 border-t-2 p-4 w-full mt-2'>
      <div class="one heading text-center">
        <ul class="flex justify-center gap-6">
          <li><a class="btn btn-circle" href="https://www.linkedin.com/in/nithish-u/" target='_blank' title="Linkedin"><Linkedin/></a></li>
          <li><a class="btn btn-circle" href="https://github.com/Nithishvikky" target='_blank' title='GitHub'><Github/></a></li>
          <li><a class="btn btn-circle" href="https://www.instagram.com/_.nithish_._._/" target='_blank' title='Instagram'><Instagram/></a></li>
        </ul>
        <ul class="flex px-2 gap-5 text-md items-center justify-center font-bold mt-5 underline">
          <li class="border-r-4 pr-4"><Link to="/">Home</Link></li>
          <li class=""><Link to="/Checker">Checker</Link></li>
        </ul>
        <h2 class="mt-5" title="Email"><a href="#">nithishudhayakumar007@gmail.com</a></h2>
      </div>
    </footer>
  )
}
