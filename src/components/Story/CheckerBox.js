import React, { useEffect, useState } from 'react';
import { checkColors } from './color-checker';
import { Component } from 'lucide-react';

export default function CheckerBox() {
    var [backgroundcolorValue,setBackgroundcolorValue] = useState("#000000");
    var [colorValue,setColorValue] = useState("#FFFFFF");
    var [colorData,setColorData] =useState({}) ;
    var text = colorData.text;
    var headline=colorData.headline;
    var component=colorData.component;
    var smallText = colorData.smallText;
    var largeText = colorData.largeText;
    var percentage = Math.round((Math.round(colorData.contrast)/21.0)*100);
    console.log(percentage);
    const handleBackgroundColor =(e)=>{
         setBackgroundcolorValue(e.target.value);
         percentage=(Math.round((Math.round(colorData.contrast)/21.0)*100));
         text=colorData.text;
         headline=colorData.headline;
         component=colorData.component;
         smallText = colorData.smallText;
         largeText = colorData.largeText;
        
    };
    const handleColor =(e)=>{
         setColorValue(e.target.value);
         percentage=(Math.round((Math.round(colorData.contrast)/21.0)*100));
         text=colorData.text;
         headline=colorData.headline;
         component=colorData.component;
         smallText = colorData.smallText;
         largeText = colorData.largeText;
    };
    
    const myStyle = {
      alignItems:"center",
      color:colorValue,
      backgroundColor:backgroundcolorValue,
      borderBottomRightRadius: 12,
      borderTopRightRadius: 12,
    };

    useEffect(() => {
       setColorData(checkColors(colorValue, backgroundcolorValue));
    }, [colorValue,backgroundcolorValue]);

  return (
    <div class="w-full rounded-xl bg-base-300 shadow-2xl flex flex-row ">
       <div class='w-1/2 p-6 mr-12'>
         <ul class="f flex gap-10">
           <li>
            <div>
              <h1 class="font-bold mb-2">Background color</h1>
              <div class="flex">
                <input type="text" value={backgroundcolorValue.toUpperCase()} class="one cursor-not-allowed rounded-lg p-2 border-2 border-slate-300 font-bold" />
                <input type="color" id="favcolor" name="favcolor" value={backgroundcolorValue.toUpperCase()} onChange={handleBackgroundColor} class="w-10 h-10 bg-base-300"/>
              </div>
                 <input type="text" value={"rgb("+colorData.backgroundRgb+")"} class="one cursor-not-allowed mt-1 rounded-lg p-2 border-2 border-slate-300 font-bold" />
            </div>
           </li>
           <li>
            <div> 
              <h1 class="font-bold mb-2">Text color</h1>
              <div class="flex">
                <input type="text" value={colorValue.toUpperCase()} class="one cursor-not-allowed rounded-lg p-2 border-2 border-slate-300 font-bold"/>
                <input type="color" id="favcolor" name="favcolor" value={colorValue.toUpperCase()} onChange={handleColor} class="w-10 h-10 bg-base-300"/>
              </div>
              <input type="text" value={"rgb("+colorData.foregroundRgb+")"} class="one cursor-not-allowed mt-1 rounded-lg p-2 border-2 border-slate-300 font-bold"/>
            </div>
           </li>
         </ul>
         <h1 class="f font-bold mb-2 mt-7">Contrast</h1>
         <div class="card">
          <div class="w-full bg-base-100 p-5 rounded-t-xl flex justify-between">
          <div>
           <h1 class="Name text-4xl font-bold">{percentage}%</h1>
           <label>In percentage</label>
          </div>
          <div class='mt-3'>
          {percentage >= 20 ?<progress className="progress progress-success w-56" value={percentage} max="100"></progress>:""}
          {percentage < 20 ?<progress className="progress progress-error w-56" value={percentage} max="100"></progress>:""} 
          </div>
           <div>
            <h1 class="Name text-4xl font-bold">{colorData.contrast}</h1>
            <label>Out Of 21</label>
           </div>
          </div>
          <div class="w-full flex mt-1 gap-1">
             <div class="w-1/2 bg-base-100 p-5 rounded-b-xl rounded-r-none">
              <h1 class="f font-bold -mt-2 text-lg">Standard</h1>
              <div class="flex justify-between mt-1">
              <div class="">
              <h1 class="f mb-2">Component</h1>
              {component == "Fail" ? <h1 class="text-error text-2xl ">{component}</h1>:""} 
              {component != "Fail" ? <h1 class="text-success text-2xl ">{component}</h1>:""} 
              </div>
              <div class="">
              <h1 class="f mb-2">Headline</h1>
              {headline == "Fail" ? <h1 class="text-error text-2xl ">{headline}</h1>:""} 
              {headline != "Fail" ? <h1 class="text-success text-2xl ">{headline}</h1>:""} 
              </div>
              </div>
              </div> 
              <div class="w-1/2 bg-base-100 p-5 rounded-b-xl rounded-l-none">
                <h1 class="f font-bold -mt-2 text-lg">Standard</h1>
                <div class="flex justify-between mt-1">
                  <div>
                    <h1 class="f mb-2">Text</h1>
                    {text == "Fail" ? <h1 class="text-error text-2xl ">{text}</h1>:""} 
                    {text != "Fail" ? <h1 class="text-success text-2xl ">{text}</h1>:""} 
                  </div>
                  <div class="flex flex-col gap-2">
                   <div>
                   {smallText >= 20 ?<progress className="progress progress-success w-20" value={smallText} max="100"></progress>:""}
                   {smallText < 20 ?<progress className="progress progress-error w-20" value={smallText} max="100"></progress>:""} 
                   <label class='label -mt-2'>
                    <span class="label-text-alt">Small Text</span>
                    </label>
                   </div>
                   <div>
                   {largeText >= 20 ?<progress className="progress progress-success w-20" value={largeText} max="100"></progress>:""}
                   {largeText < 20 ?<progress className="progress progress-error w-20" value={largeText} max="100"></progress>:""} 
                   <label class='label -mt-2'>
                    <span class="label-text-alt">Large Text</span>
                    </label>
                   </div>
                  </div>
                </div>
              <div>
              
              </div>
              </div> 
              </div>
              </div>
              </div>
              <div class='w-1/2 flex justify-center ml-7' style={myStyle}>
                 <h1 class="f">Nithish U<br></br>727721EUEE058<br></br>EEE - B</h1>
              </div>
              
    </div>
  )
}
