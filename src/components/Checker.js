import React from 'react';
import CheckerBox from './Story/CheckerBox';
import { ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Checker() {
  return (
    <>
    <Navbar/>
    <div class='body py-12 heading'>
      <div class="text-center pb-12">
       <h1 className='one text-5xl font-extrabold'>Color Contrast Checker</h1>
       <h2 className='one mt-7 text-slate-500'>Calculate the contrast ratio of text and background colors.</h2>
      </div>
      <CheckerBox/>
      <div class="f pb-12 mt-20">
         <h1 class="text-2xl font-extrabold">How does it work?</h1>
         <p class="f text-md font-medium mt-4">This tool follows the Web Content Accessibility Guidelines (WCAG), which are a series of recommendations for making the web more accessible. Regarding colors, the standard defines two levels of contrast ratio: AA (minimum contrast) and AAA (enhanced contrast). The level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (at least 18pt) or bold text. The level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text or bold text.</p><br></br>
         <a href="https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines" class="hover:underline link-hover flex text-blue-500 wcag">Learn more<ExternalLink width={20} height={20}/></a>
      </div>
    </div>
    <Footer/>
    </>
  )
}
