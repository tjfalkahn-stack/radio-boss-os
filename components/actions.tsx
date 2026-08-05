'use client';
import { useEffect, useState } from 'react';

type Props={label:string;doneLabel?:string;className?:string;storageKey?:string};
export function ActionButton({label,doneLabel='Added',className='button secondary',storageKey}:Props){
  const [done,setDone]=useState(false);
  useEffect(()=>{if(storageKey)setDone(localStorage.getItem(storageKey)==='1')},[storageKey]);
  function act(){setDone(true);if(storageKey)localStorage.setItem(storageKey,'1');window.dispatchEvent(new CustomEvent('radio-boss-action',{detail:{label}}));}
  return <button className={className} onClick={act} disabled={done}>{done?doneLabel:label}</button>
}

export function ActionToast(){const [message,setMessage]=useState('');useEffect(()=>{const h=(event:Event)=>{const detail=(event as CustomEvent<{label:string}>).detail;setMessage(`${detail.label} complete`);window.setTimeout(()=>setMessage(''),1800)};window.addEventListener('radio-boss-action',h);return()=>window.removeEventListener('radio-boss-action',h)},[]);return message?<div className="toast">{message}</div>:null}
