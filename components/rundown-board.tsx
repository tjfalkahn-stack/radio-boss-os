'use client';
import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui';
import type { Segment } from '@/lib/types';

export function RundownBoard({initial}:{initial:Segment[]}){
  const [items,setItems]=useState(initial);
  const ready=useMemo(()=>Math.round(items.filter(x=>x.status==='ready'||x.status==='done').length/items.length*100),[items]);
  function move(index:number,dir:-1|1){const next=index+dir;if(next<0||next>=items.length)return;const copy=[...items];[copy[index],copy[next]]=[copy[next],copy[index]];setItems(copy)}
  function cycle(index:number){const order:Segment['status'][]=['ready','next','live','done'];setItems(items.map((x,i)=>i===index?{...x,status:order[(order.indexOf(x.status)+1)%order.length]}:x))}
  return <div className="card"><div style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center',marginBottom:14}}><div className="eyebrow">Live Order</div><Badge tone="green">{ready}% READY</Badge></div><div className="list">{items.map((x,i)=><div className={`list-item segment ${x.status==='live'?'live':''}`} key={`${x.time}-${x.title}`}><strong>{x.time}</strong><div><h3>{x.title}</h3><div className="muted">{x.duration} · {x.detail}</div></div><div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'flex-end'}}><button className="button secondary" onClick={()=>move(i,-1)} aria-label={`Move ${x.title} up`}>↑</button><button className="button secondary" onClick={()=>move(i,1)} aria-label={`Move ${x.title} down`}>↓</button><button className="button secondary" onClick={()=>cycle(i)}><Badge tone={x.status==='next'?'gold':x.status==='live'?'red':x.status==='done'?'green':''}>{x.status}</Badge></button></div></div>)}</div></div>
}
