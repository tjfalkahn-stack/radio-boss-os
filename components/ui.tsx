import { ReactNode } from 'react';
export function Page({eyebrow,title,subtitle,children}:{eyebrow:string,title:string,subtitle?:string,children:ReactNode}){return <div className="content"><div className="eyebrow">{eyebrow}</div><h1 className="page-title">{title}</h1>{subtitle&&<p className="muted">{subtitle}</p>}<div style={{height:18}}/>{children}</div>}
export function Card({children,className=''}:{children:ReactNode,className?:string}){return <section className={`card ${className}`}>{children}</section>}
export function Badge({children,tone=''}:{children:ReactNode,tone?:string}){return <span className={`badge ${tone}`}>{children}</span>}
