import React from 'react';
import { Expand } from 'lucide-react';

export default function Cards({items}) {
  console.log(items.title);
  return (
  <div className="f card btn-ghost shadow-2xl w-80">
    <div className="card-body">
        <div className="card-actions">
         <button className="btn btn-base-100">{items.icon}</button>
        </div>
        <div class="mt-3">
        <h2 class="text-lg font-bold ">{items.title}</h2>
        <p class="mt-1">{items.para}</p>
        </div>
    </div>
   </div>
  )
}
