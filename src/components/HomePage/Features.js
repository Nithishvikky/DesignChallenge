import React from 'react';
import Data from './CardDetails';
import Cards from './Cards';

export default function Features() {
  return (
    <div class="heading -mt-[-60px] flex flex-wrap gap-10 md:justify-center sm:justify-center">
      {Data.map((items)=>(
         <Cards key={items.title} items={items}/>
      ))}
    </div>
  )
}
