'use client';
import { useRef, useState } from 'react';

export function RecordingImport(){
  const input=useRef<HTMLInputElement>(null);const [file,setFile]=useState('');
  return <><input ref={input} type="file" accept="video/mp4,video/quicktime" hidden onChange={e=>setFile(e.target.files?.[0]?.name||'')}/><button className="button secondary" onClick={()=>input.current?.click()}>{file?'Selected: '+file:'Choose File'}</button>{file&&<p className="muted" style={{marginBottom:0}}>Ready to send into the KlipPharma processing queue.</p>}</>
}

export function ClipActions(){const [status,setStatus]=useState<'idle'|'approved'|'editing'>('idle');return <div style={{display:'flex',gap:8,flexWrap:'wrap'}}><button className="button green" onClick={()=>setStatus('approved')} disabled={status==='approved'}>{status==='approved'?'Approved':'Approve'}</button><button className="button secondary" onClick={()=>setStatus('editing')}>{status==='editing'?'Editor Open':'Edit'}</button></div>}
